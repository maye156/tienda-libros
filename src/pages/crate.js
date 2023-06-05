import { useState } from "react";
import '../styles/styles.css';

export function Create() {

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [portada, setPortada] = useState("");
    const [intro, setIntro] = useState("");
    const [comt, setComt] = useState("");
    const [completado, setCompletado] = useState(false);

    function handleChange(e) {
        const n = e.target.name;
        const valor = e.target.value;
        switch (n) {
            case "titulo":
                setTitulo(valor);
                break;
            case "autor":
                setAutor(valor);
                break;
            case "portada":
                handleChangefile(e);
                break;
            case "intro":
                setIntro(valor);
                break;
            case "comt":
                setComt(valor);
                break;
            case "completado":
                setCompletado(e.target.checked);
                break;
            default:
                break;

        }
    }

    function handleChangefile(e) {
        const element = e.target;
        var file = element.files[0];
        var read = new FileReader();

        read.readAsDataURL(file);
        read.onloadend = function () {
            //console.log("resultado", read.result);
            setPortada(read.result.toString());
            console.log(portada);

        };

    }

    function handleSubmit(e) {
        e.preventDeafault();
        const libro = {
            id: crypto.randomUUID(),
            titulo: titulo,
            autor,
            portada,
            intro,
            comt,
            completado
        };
        //Crear un nuevo libro
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row g-2" >
                    <label>Titulo:</label>
                    <input type="text" onChange={handleChange} value={titulo} name="titulo" />
                    {titulo}
                </div>
                <div className="row g-2" >
                    <label>Autor:</label>
                    <input type="text" onChange={handleChange} value={autor} name="autor" />
                    {autor}
                </div>
                <div className= "row g-2" >
                    <div>
                        <label class>Portada:</label>
                        <input type="file" onChange={handleChange} name="portada" className="form-control" id="inputGroupFile01" />
                    </div>


                    <div  id="img">
                        {!!portada ? <img alt="portada" width="200" src={portada} /> : <img alt="portada" width="200" src="https://th.bing.com/th/id/R.0e5b98614c5d263813e38232e4219307?rik=X06hlUCgMGZ3Qg&pid=ImgRaw&r=0" />}

                    </div>
                </div>

                <div className="row g-2">
                    <label>Intro:</label>
                    <input type="text" onChange={handleChange} value={intro} name="intro" />
                    {intro}
                </div>
                <div className="row g-2">
                    <label>Comentario:</label>
                    <input type="text" onChange={handleChange} value={comt} name="comt" />
                    {comt}
                </div>
                <div className="row g-2">
                <div className="form-check form-switch">
                    <label className="form-check-label" for="flexSwitchCheckDefault">  Completado   </label> 
                    <input type="checkbox" onChange={handleChange} value={completado} name="completado" className=" form-check-input" id="flexSwitchCheckDefault" />
                    {completado}
                </div>
                </div>
            </form>
        </div>
    )
}



