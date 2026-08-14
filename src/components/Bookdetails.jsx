import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

const API_BASE = "https://e-commerce-project-orbb.onrender.com";

function Bookdetails() {

    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);

    async function fetchProducts() {
        const response = await fetch(`${API_BASE}/products/${id}`);
        const data = await response.json();
        setProduct(data);
    }

    useEffect(() => {
        fetchProducts();
    }, [id]);

    if (!product) {
        return <h2>Loading...</h2>;
    }

    function handleAddToCart() {
        addToCart(
            {
                id: product._id,
                title: product.title,
                price: product.price,
                image: product.image
            },
            quantity
        );
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    }

    function handleBuyNow() {
        addToCart(
            {
                id: product._id,
                title: product.title,
                price: product.price,
                image: product.image
            },
            quantity
        );
        navigate("/cart");
    }

    return (
        <>
            <Navbar />

            <div className="details">

                <img
                    src={product.image}
                    alt={product.title}
                    className="details-image"
                />

                <div className="details-content">

                    <h1>{product.title}</h1>

                    <h3>Author : {product.author}</h3>

                    <h3>Category : {product.category}</h3>

                    <h2>₹{product.price}</h2>

                    <h3>⭐ {product.rating}</h3>

                    <p>{product.description}</p>

                    <div className="qty-stepper">
                        <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                            −
                        </button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity((q) => q + 1)}>+</button>
                    </div>

                    <div className="details-actions">
                        <button onClick={handleAddToCart}>
                            {added ? "Added ✓" : "Add to Cart 🛒"}
                        </button>

                        <button className="buy-now-btn" onClick={handleBuyNow}>
                            Buy Now
                        </button>
                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default Bookdetails;