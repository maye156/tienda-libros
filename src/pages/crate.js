import { useState } from "react";

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

    function handleSubmit (e){
      e.preventDeafault();
      const libro = {
        id:crypto.randomUUID(),
        titulo:titulo,
        autor,
        portada,
        intro,
        comt,
        completado
      }; 
      //Crear un nuevo libro
    }

    return (

        <form onSubmit={handleSubmit}>
            <div>
                <label>Titulo:</label>
                <input type="text" onChange={handleChange} value={titulo} name="titulo" />
                {titulo}
            </div>
            <div>
                <label>Autor:</label>
                <input type="text" onChange={handleChange} value={autor} name="autor" />
                {autor}
            </div>
            <div>
                <label>Portada:</label>
                <input type="file" onChange={handleChange} name="portada" />

                <div>
                {!!portada ? <img alt="portada" width="200" src={portada} /> : <img alt="portada" width="200" src="https://th.bing.com/th/id/R.0e5b98614c5d263813e38232e4219307?rik=X06hlUCgMGZ3Qg&pid=ImgRaw&r=0" />}                      
                                        
                                         </div>
            </div>
            <div>
                <label>Intro:</label>
                <input type="text" onChange={handleChange} value={intro} name="intro" />
                {intro}
            </div>
            <div>
                <label>Comentario:</label>
                <input type="text" onChange={handleChange} value={comt} name="comt" />
                {comt}
            </div>
            <div>
                <label>Completado:</label>
                <input type="checkbox" onChange={handleChange} value={completado} name="completado" />
                {completado}
            </div>
        </form>
    )
}



