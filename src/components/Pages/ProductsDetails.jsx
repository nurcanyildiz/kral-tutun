import React from "react";
import "./Product.css";
import Title from "../GeneralComponents/Title";
import Product from "./ProductCards";
import shisha from "./images/shisha.jpg";
import cachimberos from "./images/cachimberos.jpg";
import cachimberos2 from "./images/cachimberos2.jpg";
import cachimberos3 from "./images/cachimberos3.jpg"

const data = [
    {
        Img: shisha,
        title: "New Shisha",

        description:
            "By providing children with toys, we can help them to develop the skills and resilience "
    },

    {
        Img: shisha,
        title: "New Shisha",
        description:
            "By providing children with toys, we can help them to develop the skills and resilience "

    },

    {
        Img: shisha,
        title: "New Shisha",
        description:
            "By providing children with toys, we can help them to develop the skills and resilience "
    },

    {
        Img: cachimberos2,
        title: "New Shisha",

        description:
            "By providing children with toys, we can help them to develop the skills and resilience "
    },
    {
        Img: cachimberos3,
        title: "New Shisha",

        description:
            "By providing children with toys, we can help them to develop the skills and resilience "
    },
    {
        Img: cachimberos3,
        title: "New Shisha",

        description:
            "By providing children with toys, we can help them to develop the skills and resilience "
    },
    {
        Img: cachimberos3,
        title: "New Shisha",

        description:
            "By providing children with toys, we can help them to develop the skills and resilience "
    },
    {
        Img: cachimberos3,
        title: "New Shisha",

        description:
            "By providing children with toys, we can help them to develop the skills and resilience "
    },
    {
        Img: cachimberos3,
        title: "New Shisha",

        description:
            "By providing children with toys, we can help them to develop the skills and resilience "
    },
]


const ProductsDetails = () => {
    return (
        <>
            <Title title="Our Products"/>
            <secttion className="Product-section">
                {data.map((item, index) => {
                    return <Product key={index} item={item}/>;
                })}
            </secttion>
        </>
    )

}

export default ProductsDetails;