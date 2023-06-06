import { Link } from "react-router-dom";

export function Book({item}){
    return (
    <Link to={`/vista/${item.id}`}>
       <div>
          <img src={item.portada} width="200" alt={item.titulo}/>
          <div> {item.titulo}</div>
       </div>
    </Link>
    );
}