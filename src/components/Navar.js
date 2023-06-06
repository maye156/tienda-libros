import { Link } from "react-router-dom";

export default function Navar(){
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/crear">Crear Libro</Link>
            
        </div>
    ) 
}