import { Link } from "react-router-dom";
function Footer() {

    return (

        <footer className="footer">


            <div className="footer-container">


                <div className="footer-section">

                    <h2>📚 Book Shop</h2>

                    <p>
                        Discover your next favorite book
                        and enhance lifelong learning.
                    </p>

                </div>



                <div className="footer-section">

                    <h3>Quick Links</h3>

                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/reviews">Reviews</Link>

                </div>



                <div className="footer-section">

                    <h3>Contact</h3>

                    <p>📧 bookshop@gmail.com</p>

                    <p>📞 +91 9876543210</p>

                    <p>📍 Tamil Nadu, India</p>

                </div>



                <div className="footer-section">

                    <h3>Follow Us</h3>

                    <p>
                        📘 Facebook
                    </p>

                    <p>
                        📸 Instagram
                    </p>

                    
                </div>


            </div>



            <div className="footer-bottom">

                <p>
                    © 2026 Book Shop | All Rights Reserved
                </p>

            </div>


        </footer>

    );

}


export default Footer;