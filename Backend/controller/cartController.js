import Cart from "../models/cart.js";
import Product from "../models/product.js";

// Add item to cart
export const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    let cart = await Cart.findOne({ userId });

    // If no cart, create one
    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [{ productId, quantity }],
      });
    } else {
      const item = cart.items.find(i => i.productId.toString() === productId);

      if (item) {
        item.quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }

      await cart.save();
    }

    res.status(200).json({ success: true, data: cart });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get cart by user
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId })
      .populate("items.productId");

    res.status(200).json({ success: true, data: cart });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Remove item from cart
export const removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const cart = await Cart.findOne({ userId });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter(i => i.productId.toString() !== productId);

    await cart.save();

    res.status(200).json({ success: true, data: cart });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
