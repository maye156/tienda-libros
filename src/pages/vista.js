import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { useAppcontext } from "../store/store";

export function Vista(){
    const [item, setItem] =  useState(null);
    const  params = useParams();
    const store = useAppcontext();
   
    useEffect(()=>{
        
        const libro = store.obtenerItem(params.libroId);
    
        setItem(libro);  
       
    }, [])

   
     if(!item){
        return <div>Libro no encontrado </div>
    }

    return (
        <Layout>
        <h2>{item?.titulo} </h2>
        <div> {item?.portada ?<img src={item?.portada} width="250" alt={item.titulo}/> : " "}  </div>
         <div> {item?.autor}</div>
         <div> {item?.intro}</div>
         <div> {item?.comt}</div>
         <div> {item?.completado ? 'Leído': 'Por terminar'}</div>
        </Layout>
    );
}