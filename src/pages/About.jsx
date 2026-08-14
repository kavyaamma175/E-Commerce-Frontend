import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



function About() {

    return (
        <>
        <Navbar />

        <section className="about" id="about">

            <h1>📖 About Us</h1>

            <p>
                Welcome to <strong>Book Shop</strong>! We believe that books
                have the power to inspire, educate, and transform lives.
            </p>

            <p>
                Our store offers a wide collection of Fiction, Self-Help,
                Finance, Programming, Educational, and Children's books
                at affordable prices.
            </p>

            <div className="about-container">

                <div className="about-card">
                    <h2>📚</h2>
                    <h3>1000+ Books</h3>
                    <p>Choose from a wide variety of books.</p>
                </div>

                <div className="about-card">
                    <h2>🚚</h2>
                    <h3>Fast Delivery</h3>
                    <p>Quick and safe delivery to your doorstep.</p>
                </div>

                <div className="about-card">
                    <h2>⭐</h2>
                    <h3>Quality Service</h3>
                    <p>Trusted by hundreds of happy readers.</p>
                </div>

                <div className="about-card">
                    <h2>💳</h2>
                    <h3>Secure Payment</h3>
                    <p>Safe and secure online payment options.</p>
                </div>

            </div>

        </section>
        <Footer />
        </>

    );

}

export default About;
  