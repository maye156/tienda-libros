import Navar from "./Navar";

export default function Layout ({children}){
    return(
        <div>
            <Navar/>
            <div>{children}</div>
        </div>
    )
}