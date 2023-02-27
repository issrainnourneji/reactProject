// import logo from './logo.svg';
import { Suspense } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import ComposantClass from './Components/ComposantClass';
import Composantcycle from './Components/Composantcycle';
import ComposantFunct from './Components/ComposantFunct';
import NavigationBar from './Components/Navbar';
import Personne from './Components/Personne';
import Product from './Components/Product';
import Product1 from './Components/Product1';
import ProductDetails from './Components/ProductDetails';
import Products from './Components/Products';
import ProductFonctionnel from './ComposantFonctionnel/ProductFonctionnel';
import ProductsFonctionnel from './ComposantFonctionnel/ProductsFonctionnel';
import Acceuil from './routes/Acceuil';
import Contact from './routes/Contact';
import Home from './routes/Home';
import NotFound from './routes/NotFound';


const option=(
  <ol>
    <li>TWIN</li>
    <li>BI</li>
    <li>SAE</li>
  </ol>
)
let x="Bonjour" 
var y="tout"
const z="le monde"
const  expression  =  <p>  1  +  1  =  {  1  +  1  }  </p>
var nom="Ghada"
var prenom="BK"
var photo=<img src="logo192.png"></img>
const user={
  username: "test",
  lastname: "test"
}

function formatName(user){
  return user.lastname+ "--- "+ user.lastname
}
var myStyle={
  fontsize: 100,
  color: 'red'
}
function App() {
  return (
    <div className="App">
      {/* <ComposantClass />
      <ComposantFunct />
      <Product1 />
      <Personne/>
      <Personne nom="test" prenom="ceci est un test" />
      <Composantcycle /> */}

      
      
      {/* <h1 style={myStyle}>Code CSS</h1>
      {formatName(user)}
       Ceci un objet
      {user.lastname} - {user.lastname}
      Hello 4TWIN8
      {option}
      la valeur de x est {x}
      la valeur de y est {y}
      la valeur de z est {z}
      la contenu de l'expression est {expression}
      <br>
      </br>
      Hello {nom} {prenom} {photo} */}
      {/* <Products /> */}
       
      {/* <ul>
        <li><Link to= "/home" reloadDocument="true">Home </Link></li>
        <li><Link to= "/contact/:id">Contact </Link></li>
        <li><Link to= "/acceuil">Acceuil </Link></li>
      </ul> */}

<NavigationBar></NavigationBar>
 <Suspense>
<Routes>
      <Route path ="/productss" element ={<Products/>}>
      
      </Route>
      <Route path ="/detailss" element ={<ProductDetails/>}></Route>
      <Route path ="/*" element ={<NotFound/>}></Route>
</Routes>
</Suspense> 


      {/*<ul>
      <li><NavLink to= "/home" reloadDocument="true">Home </NavLink></li>
        <li><NavLink to= "/contact/:id">Contact </NavLink></li>
        <li><NavLink to= "/acceuil">Acceuil </NavLink></li>
      </ul>
      <Routes>
      <Route path ="/home" element ={<Home/>}></Route>
      <Route path ="/contact/:id" element ={<Contact/>}></Route>
      <Route path ="/acceuil" element ={<Acceuil/>}></Route>
      <Route path ="/*" element ={<NotFound/>}></Route>
    </Routes>*/}
    </div>
  );
}

export default App;
