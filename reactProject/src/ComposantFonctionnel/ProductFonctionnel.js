import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { useState } from "react";


function ProductFonctionnel(props) {
    const [product,setproduct]=useState(props.product)
    const [like,setlike]=useState(props.product.like)
    const [quantity,setquantity]=useState(props.product.quantity)
    
    
    // addLikes = () => {
    //     this.setState((prevState) => ({
    //       product: { ...prevState.product,
    //                  like: prevState.product.like + 1 },
    //     }));
    //   };

    const addLikes = ()=>{
        setlike(like+1)
    }
    const updateQuantity = ()=>{
        setquantity(quantity-1)
    }
    const styleClass = like >5 ? "bestProduct": "text-center"

    return (  <>
     <Card className={styleClass}>
              <Card.Img variant="top" src={require("../assets/images/" + props.product.img)} />
              <Card.Body>
                <Card.Title> {props.product.name}</Card.Title>
                <Card.Text>{props.product.description}</Card.Text>
                <Card.Text> {props.product.price} </Card.Text>
                <Card.Text>Likes :{like}</Card.Text>
                <Card.Text>quantité :{quantity}</Card.Text>
                <Button variant="primary" onClick={addLikes}>Like</Button>{' '}
                <Button variant="primary" onClick={()=>props.buyFunction(product,updateQuantity)} disabled={quantity===0}>Buy</Button>
              </Card.Body>
      </Card>
      </>);
}

export default ProductFonctionnel;