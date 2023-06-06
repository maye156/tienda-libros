import { useAppcontext } from "../store/store"
import Layout from "../components/Layout";
import { Vista } from "./vista";
import { Book } from "../components/Book";



export function Index (){
    const store=useAppcontext();
    
    return (
        
        <Layout>
         
            {store.libro.map( (item)=>
             (
                <Book key={item.id} item={item}/>
             )
        )}</Layout>
    
)}