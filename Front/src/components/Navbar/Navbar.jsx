import React from "react";
import { Link } from "react-router-dom";
import useAppContext from "../../../context/AppContext";
import useLogout from "../../../utils/useLogout";
import classes from "./styles.module.css"



export default function Navbar() {
    const logout = useLogout()
    const { store } = useAppContext();
    const { token } = store;
    const { username } = store;
    const {avatar} = store;

    let conditionalLinks = null;

    if (token == "" || !token) {
        conditionalLinks = (
            <>
                <li className="nav-item p-3 py-md-1">
                    <Link to={'/login'} className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item p-3 py-md-1">
                    <Link to={'/signup'} className="nav-link">
                        Sign Up
                    </Link>
                </li>
            </>
        );
    }

    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to={token == "" || !token ? "/" : `/${username}`} className="navbar-brand ps-3 h-100">
                    <img src='https://i.ibb.co/Phs1CSV/Logo-2-removebg-preview.png' alt="Logo" width="auto" height="60px" />
                </Link>
                <p className="h4 text-white">Think Flash</p>


                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#menuLateral"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <section
                    className={`offcanvas offcanvas-start bg-dark w-75 ${classes.offcanvas}`}
                    id="menuLateral"
                    tabindex="-1"
                >
                    <div className="offcanvas-header" data-bs-theme="dark">
                        <Link to={token == "" || !token ? "/" : `/${username}`} className="p-0 h-100">
                            <img className="rounded-circle img-fluid"  src={avatar} alt={username + " avatar "} width="auto" height="60px" />
                        </Link>
                        <p className="h4 text-white ms-0 me-auto">{username}</p>
                        <button
                            className="btn-close"
                            type="button"
                            aria-label="Close"
                            data-bs-dismiss="offcanvas"
                        ></button>
                    </div>

                    <div
                        className="offcanvas-body d-flex flex-column justify-content-between px-0"
                    >
                        <ul className="navbar-nav fs-5 justify-content-end">
                            {!token ? conditionalLinks : (
                                <>
                                    <li className="nav-item p-3 py-md-1">
                                        <a href="" className="nav-link">User</a>
                                    </li>
                                    <li className="nav-item p-3 py-md-1">
                                        <a className="nav-link" onClick={logout}>
                                            Logout
                                        </a>
                                    </li>
                                </>
                            )
                            }
                        </ul>
                    </div>
                </section>

            </div>
        </nav>

    );
}
