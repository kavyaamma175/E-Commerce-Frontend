import { useNavigate } from "react-router-dom";

function BookCard({
    id,
    title,
    author,
    price,
    rating,
    category,
    image,
    addToCart
}) {

    const navigate = useNavigate();

    return (

        <div
            className="card"
            onClick={() => navigate(`/book/${id}`)}
        >

            <img
                src={image}
                alt={title}
                className="book-image"
            />

            <h2>{title}</h2>

            <p>{author}</p>

            <p>{category}</p>

            <h3>₹{price}</h3>

            <p>⭐ {rating}</p>

            <button
                onClick={(e) => {
                    e.stopPropagation();

                    if (addToCart) {
                        addToCart({
                            id,
                            title,
                            price,
                            image
                        });
                    }
                }}
            >
                Add To Cart 🛒
            </button>

        </div>

    );
}

export default BookCard;