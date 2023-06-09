import { Link } from "react-router-dom";
import { useAppcontext } from "../store/store"



export function Index (){
    const store=useAppcontext();
    
    return (
        
        <div>
            <Link to="/crear">Crear Libro</Link>
            {store.libro.map(
            
            (item)=>(<div>{item.titulo}</div>)
        )}</div>
    
)}