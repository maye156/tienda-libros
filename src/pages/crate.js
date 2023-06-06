import { useState } from "react";
import '../styles/styles.css';
import { useAppcontext } from "../store/store";
import { Link } from "react-router-dom";

export function Create() {

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [portada, setPortada] = useState("");
    const [intro, setIntro] = useState("");
    const [comt, setComt] = useState("");
    const [completado, setCompletado] = useState(false);
    const store = useAppcontext();

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
        e.preventDefault();
        console.log("entro");

        const libro = {
            id: crypto.randomUUID(),
            titulo: titulo,
            autor,
            portada,
            intro,
            comt,
            completado
        };

        store.crearItems(libro);
        console.log(libro.id);
        console.log(titulo);

    }

    return (
        <div className="container">
            <Link to="/">Home</Link>
            <form onSubmit={handleSubmit}>
                <div className="row g-2" >
                    <label>Titulo:</label>
                    <input type="text" onChange={handleChange} value={titulo} name="titulo" />

                </div>
                <div className="row g-2" >
                    <label>Autor:</label>
                    <input type="text" onChange={handleChange} value={autor} name="autor" />

                </div>
                <div className="row g-2" >
                    <div>
                        <label class>Portada:</label>
                        <input type="file" onChange={handleChange} name="portada" className="form-control" id="inputGroupFile01" />
                    </div>

                </div>

                <div className="row g-2">
                    <label>Intro:</label>
                    <input type="text" onChange={handleChange} value={intro} name="intro" />

                </div>
                <div className="row g-2">
                    <label>Comentario:</label>
                    <input type="text" onChange={handleChange} value={comt} name="comt" />

                </div>
                <div className="row g-2">
                    <div className="form-check form-switch">
                        <label className="form-check-label" for="flexSwitchCheckDefault">  Completado   </label>
                        <input type="checkbox" onChange={handleChange} value={completado} name="completado" className=" form-check-input" id="flexSwitchCheckDefault" />
                    </div>

                </div>
                {titulo}    {autor} {intro}{comt} {completado}
                <input type="submit" value="Registrar libro" />
            </form>
        </div>
    )
}



