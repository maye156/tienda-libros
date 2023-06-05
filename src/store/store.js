import { useContext, useEffect, useState, createContext } from "react";

const AppContext=createContext({
      items:[],
      crearItems:(item)=>{},
      obtenerItem:(id)=>{},
      actualizarItem:(item)=>{}

});

export function Store({children}){

    const [libro, setLibro]=useState([]);

    function crearItems(item){

        const temporal=[... libro];
        temporal.push(item);
        setLibro(temporal)
               
    }

    function obtenerItem(id){

        const item=libro.find((item)=>item.id===id);

        return(item);
    }

    function actualizarItem(item){

        const index=libro.findIndex((i)=>i.id===item.id);

        const temporal=[... libro];
        temporal[index]={...item};


    }

    return(
       <AppContext.Provider
       value={{
        libro,crearItems,obtenerItem,actualizarItem
       }}>
        {children}
       </AppContext.Provider>
    )
}
export function useAppcontext(){
    return(
        useContext(AppContext)
    )
}
