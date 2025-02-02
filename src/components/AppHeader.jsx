import { Link, NavLink } from "react-router-dom";

function AppHeader() {

    const navLinks = [
        {
            path: "/",
            title: "Home page"
        },
        {
            path: "/movies",
            title: "Catalogo dei film"
        },
        {
            path: "/detail-page",
            title: "Dettagli singolo film"
        }
    ]

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {navLinks.map((curLink, index) => {
                                return (
                                    <li key={index} className="nav-item">
                                        <NavLink className="nav-link" to={curLink.path}>{curLink.title}</NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default AppHeader;