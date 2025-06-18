import Link from "next/link";
function AppBar() {

  
    const mode = "dark";

    return (
        <nav className={`navbar navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Next-React</Link>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/customers">Customers</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default AppBar;