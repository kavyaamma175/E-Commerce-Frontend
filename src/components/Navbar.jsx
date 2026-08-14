import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
    const { cartCount } = useCart();

    return (

        <div className="nav">

            <Link to="/" className="brand-link">
                <h1>📖 Book Haven</h1>
            </Link>

            <div className="nav-links">

                <Link to="/">Home</Link>

                <Link to="/products">Products</Link>

                <Link to="/about">About</Link>

                <Link to="/reviews">Reviews</Link>

            </div>

            <div className="search-box">

                <input
                    type="text"
                    placeholder="Search books..."
                />

                <button>🔍</button>

            </div>

            <Link to="/cart" className="cart-btn">
                🛒 Cart
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>

        </div>

    );
}

export default Navbar;