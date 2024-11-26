import React from 'react';
import { Link } from 'react-router-dom';
import cssss from './nev.module.css'

export default function Nev(){
    return <>
        <nav  className={`${cssss.bgg} navbar navbar-expand-lg text-white`}>
            <div className=" container"> 
                <Link className="navbar-brand text-white fw-bolder fs-2 text-uppercase" to={'/'}>True Path</Link>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to={'About'}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to={'PortFolio'}>PortFolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to={'Contact'}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}


