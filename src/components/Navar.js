import { Link } from "react-router-dom";

export default function Navar() {
    return (
        <nav class="navbar bg-primary" data-bs-theme="dark">
            <div class="container-fluid">
                <Link className="nav-link active" to="/">Home</Link>
            </div>
            <div class="container-fluid">
                <Link className="nav-link" to="/crear">Crear Libro</Link>
            </div>
        </nav>
    )
}

