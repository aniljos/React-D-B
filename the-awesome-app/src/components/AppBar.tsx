import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppThemeContext } from "../context/AppThemeContext";

function AppBar() {

    const themeContext = useContext(AppThemeContext);
    const mode = themeContext.mode;

    function changeTheme(){
        themeContext.changeMode(themeContext.mode === 'dark' ? 'light' : 'dark');
        console.log("mode", themeContext.mode);
    }

    return (
        <nav className={`navbar navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">React-Vite</Link>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/search">Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/todo">Todos</Link>
                    </li>
                    <li>
                        <button className="btn btn-warning" onClick={changeTheme}>Switch Theme</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default AppBar;