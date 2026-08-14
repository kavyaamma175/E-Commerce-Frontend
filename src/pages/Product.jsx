import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";
import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";

function Product() {

    const [product, setProduct] = useState([]);
    const { addToCart } = useCart();

    async function fetchProducts() {
        const response = await fetch("https://e-commerce-project-orbb.onrender.com/products");
        const data = await response.json();
        setProduct(data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <Navbar />

            <section className="product-header">

                <h1>📚 Our Collection</h1>

                <p>Explore our wide range of books</p>

                <div className="category">

                    <button>All</button>
                    <button>Fiction</button>
                    <button>Self Help</button>
                    <button>Finance</button>
                    <button>Programming</button>

                </div>

            </section>

            <div className="book-container">

                {product.map((products) => (

                    <BookCard
                        key={products._id}
                        id={products._id}
                        title={products.title}
                        author={products.author}
                        category={products.category}
                        price={products.price}
                        rating={products.rating}
                        description={products.description}
                        image={products.image}
                        addToCart={() =>
                            addToCart({
                                id: products._id,
                                title: products.title,
                                price: products.price,
                                image: products.image
                            })
                        }
                    />

                ))}

            </div>

            <Footer />

        </>
    );
}

export default Product;