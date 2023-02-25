import { useNavigate, useParams } from "react-router-dom";

function Contact () {
    const {id}= useParams();
    const navigate = useNavigate();

    return (  <>
    <h1> ceci est un contact {id}
    <button onClick={()=>navigate('/home')}> go to the home</button>
    </h1>
    </>);
}

export default Contact ;