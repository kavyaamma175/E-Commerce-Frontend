import { useState, useEffect } from "react";

import hero1 from "../assets/book1.jpg";
import hero2 from "../assets/book2.jpg";
import hero3 from "../assets/book3.jpg";
import hero4 from "../assets/book4.jpg";


function Hero(){

    const images = [
        hero1,
        hero2,
        hero3,
        hero4
    ];


    const [index,setIndex] = useState(0);



    useEffect(()=>{

        const slider = setInterval(()=>{

            setIndex((prev)=>
                (prev + 1) % images.length
            );

        },3000);


        return ()=> clearInterval(slider);


    },[]);



    return(

        <>


        <section
        className="hero"
        style={{
            backgroundImage:`url(${images[index]})`
        }}
        >


            <div className="hero-overlay">

                <h1>
                    Find Your Next Favorite Book
                </h1>


                <p>
                    Explore thousands of books and
                    enhance your lifelong learning.
                </p>


                <button>
                    Shop Now 📚
                </button>


            </div>


        </section>


        </>

    )

}


export default Hero;