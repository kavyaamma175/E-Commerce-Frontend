import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const API_BASE = "https://e-commerce-project-orbb.onrender.com";

function Cart() {
    const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
    const navigate = useNavigate();

    const [form, setForm] = useState({ name: "", phone: "", address: "" });
    const [placing, setPlacing] = useState(false);
    const [error, setError] = useState("");
    const [placedOrder, setPlacedOrder] = useState(null);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handlePlaceOrder(e) {
        e.preventDefault();
        setError("");

        if (!form.name || !form.phone || !form.address) {
            setError("Please fill in your name, phone and address.");
            return;
        }

        const order = {
            customerName: form.name,
            phone: form.phone,
            address: form.address,
            items: cartItems.map((item) => ({
                productId: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity,
                image: item.image
            })),
            totalAmount: cartTotal
        };

        setPlacing(true);
        try {
            const response = await fetch(`${API_BASE}/orders`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(order)
            });

            if (!response.ok) {
                throw new Error("Order request failed");
            }

            const saved = await response.json();
            setPlacedOrder(saved);
            clearCart();
        } catch {
            setError(
                "Could not reach the server to save your order. Please check the backend and try again."
            );
        } finally {
            setPlacing(false);
        }
    }

    if (placedOrder) {
        return (
            <>
                <Navbar />
                <section className="order-confirm">
                    <h1>📗 Order Placed!</h1>
                    <p>
                        Thanks {placedOrder.customerName || form.name}, your order has been
                        saved. We'll reach out at {placedOrder.phone || form.phone} to confirm delivery.
                    </p>
                    <button className="ghost-btn" onClick={() => navigate("/products")}>
                        Continue Browsing
                    </button>
                </section>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />

            <section className="cart-page">
                <h1>🛒 Your Cart</h1>

                {cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <p>Your cart is empty.</p>
                        <Link to="/products" className="ghost-btn">
                            Browse Books
                        </Link>
                    </div>
                ) : (
                    <div className="cart-layout">
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <div className="cart-row" key={item.id}>
                                    <img src={item.image} alt={item.title} />

                                    <div className="cart-row-info">
                                        <h3>{item.title}</h3>
                                        <p className="cart-price-tag">₹{item.price}</p>
                                    </div>

                                    <div className="qty-stepper">
                                        <button
                                            onClick={() =>
                                                updateQuantity(item.id, item.quantity - 1)
                                            }
                                        >
                                            −
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() =>
                                                updateQuantity(item.id, item.quantity + 1)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>

                                    <p className="cart-row-subtotal">
                                        ₹{item.price * item.quantity}
                                    </p>

                                    <button
                                        className="remove-link"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>

                        <form className="checkout-panel" onSubmit={handlePlaceOrder}>
                            <h2>Checkout</h2>

                            <div className="checkout-total">
                                <span>Total</span>
                                <span>₹{cartTotal}</span>
                            </div>

                            <label>
                                Name
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                />
                            </label>

                            <label>
                                Phone
                                <input
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="10-digit mobile number"
                                />
                            </label>

                            <label>
                                Delivery Address
                                <textarea
                                    name="address"
                                    value={form.address}
                                    onChange={handleChange}
                                    placeholder="House no, street, city, pincode"
                                    rows={3}
                                />
                            </label>

                            {error && <p className="checkout-error">{error}</p>}

                            <button type="submit" className="buy-now-btn" disabled={placing}>
                                {placing ? "Placing Order..." : "Place Order"}
                            </button>
                        </form>
                    </div>
                )}
            </section>

            <Footer />
        </>
    );
}

export default Cart;
