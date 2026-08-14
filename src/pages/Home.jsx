import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BookCard from "../components/BookCard";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

import { useState, useEffect } from "react";


function Home(){
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();

async function fetchProducts(){

    const response = await fetch(
        "https://e-commerce-project-orbb.onrender.com/products"
    );

    const data = await response.json();

    setProducts(data);

}


useEffect(()=>{

    fetchProducts();

},[]);

    return(

        <>

        <Navbar/>

        <Hero/>


        <section className="stats">

            <div className="stat-card">
                <h2>📚 1500+</h2>
                <p>Books Available</p>
            </div>


            <div className="stat-card">
                <h2>😊 500+</h2>
                <p>Happy Readers</p>
            </div>


            <div className="stat-card">
                <h2>⭐ 4.9</h2>
                <p>Average Rating</p>
            </div>


            <div className="stat-card">
                <h2>🚚 Fast</h2>
                <p>Delivery Service</p>
            </div>

        </section>



        <h1 className="section-title">
            🔥 Featured Books
        </h1>



        <div className="book-container">


        {
            products.slice(0,6).map((book)=>(

                <BookCard

                    key={book._id || book.id}

                    id={book._id || book.id}

                    title={book.title}

                    author={book.author}

                    price={book.price}

                    rating={book.rating}

                    category={book.category}

                    image={book.image}

                    addToCart={() =>
                        addToCart({
                            id: book._id || book.id,
                            title: book.title,
                            price: book.price,
                            image: book.image
                        })
                    }

                />

            ))
        }


        </div>



        <Footer/>

        </>

    )

}


export default Home;