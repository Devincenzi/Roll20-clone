import React from "react";

interface MyNavBarProps{
    navClass?: string,
    collapseClass?: string,
    children: any[]
}

export default function MyNavBar(props: MyNavBarProps){
    return (
        <nav className={`navbar navbar-expand-sm ${props.navClass}`}>
                <div className="container-fluid">
                    <div className={`collapse navbar-collapse ${props.collapseClass}`} id="navbarNav">
                        <ul className="navbar-nav">
                            {props.children}
                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Chat</a>
                            </li> */}
                            {/*
                            <li className="nav-item">
                                <a className="nav-link" href="#">PJ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">#</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">@</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
    )
}