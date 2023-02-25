import { useEffect, useState } from "react";
import Alert from 'react-bootstrap/Alert';
import CardGroup from "react-bootstrap/CardGroup";
import ProductFonctionnel from "./ProductFonctionnel"
import products from "../products.json";
function ProductsFonctionnel(props) {
    const [showAlert,setshowAlerte]=useState(false);
    const [showWelcome,setshowWelcome]=useState(true);


    const buy = (product,updateQuantity) => {
        product.quantity--;
        updateQuantity(product.quantity);
        console.log( product.quantity--)
        showAlert1();
        
       };
    
       
    const   showAlert1 = () => {
        setshowAlerte(true)
        setTimeout(()=>{
            setshowAlerte(false)
        },2000);
      };

      useEffect(()=>{
        // setshowWelcome(true)
        // console.log("le composnt est monté")
        setTimeout(()=>{
            setshowWelcome(false)
        },3000);
      })
    return ( <>
     {showWelcome && (
          <Alert variant="success">Welcome to our store!</Alert>
        )}
        <CardGroup>
          {products.map((p, i) => (
             <ProductFonctionnel key={i} product={p} buyFunction={buy}/>))}
             
         </CardGroup>
         {showAlert && (
          <Alert variant="success">You bought an Item</Alert>
        )}
    </> );
}

export default ProductsFonctionnel;