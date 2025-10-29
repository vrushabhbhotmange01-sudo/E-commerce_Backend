import Order from "../models/order.js";
import Cart from "../models/cart.js";
import Product from "../models/product.js";

// Place order
export const placeOrder = async (req, res) => {
  try {
    const { userId } = req.body;

    const cart = await Cart.findOne({ userId }).populate("items.productId");

    if (!cart || cart.items.length === 0)
      return res.status(400).json({ message: "Cart is empty" });

    let totalPrice = 0;

    // Reduce stock & calculate price
    for (const item of cart.items) {
      const product = await Product.findById(item.productId);
      
      if (product.stock < item.quantity)
        return res.status(400).json({ message: `Not enough stock for ${product.name}` });

      product.stock -= item.quantity;
      await product.save();

      totalPrice += product.price * item.quantity;
    }

    const order = await Order.create({
      userId,
      items: cart.items.map(i => ({
        productId: i.productId,
        quantity: i.quantity,
        price: i.productId.price,
      })),
      totalPrice,
    });

    // Clear cart after ordering
    cart.items = [];
    await cart.save();

    res.status(201).json({ success: true, data: order });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get order history
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId })
      .populate("items.productId");

    res.status(200).json({ success: true, data: orders });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
