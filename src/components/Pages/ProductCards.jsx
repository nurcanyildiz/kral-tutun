import React from "react";
import Card from "react-bootstrap/Card";
import "./Product.css";

const Product = ({item}) => {

    return (
        <>
            <Card className="card" style={{width: '18rem'}}>
                <Card.Img variant="top" src={item.Img} alt=""/>
                <Card.Body>
                    <h3>{item.title}</h3>
                    <p className="card-text">{item.description}</p>
                </Card.Body>
            </Card>
        </>
    )
}
export default Product

