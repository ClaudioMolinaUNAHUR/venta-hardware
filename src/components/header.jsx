import React from 'react';
import Carrito from './carrito';

const Header = ({agregarProducto, changuito}) => {
    
    /* eslint-disable jsx-a11y/anchor-is-valid */
    return (
        <nav className="navbar navbar-expand-lg bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Venta-Hard</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Nosotros</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sección
                        </a>
                    <ul className="dropdown-menu bg-dark ">
                        <li><a className="dropdown-item text-white" href="#">Motherboard</a></li>
                        <li><a className="dropdown-item text-white" href="#">Microprocesadores</a></li>                        
                        <li><a className="dropdown-item text-white" href="#">VGA</a></li>
                        <li><a className="dropdown-item text-white" href="#">Fuentes</a></li>
                        <li><hr className="dropdown-divider bg-light"/></li>
                        <li><a className="dropdown-item text-white" href="#">Monitores</a></li>
                        <li><a className="dropdown-item text-white" href="#">Gabinetes</a></li>
                        <li><a className="dropdown-item text-white" href="#">Perifericos</a></li>                        
                    </ul>
                    </li>                    
                    <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white w-100" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Carrito
                            </a>
                        <ul className="dropdown-menu bg-dark">                            
                            <Carrito
                                agregarProducto={agregarProducto}
                                changuito={changuito}
                            />                            
                        </ul>
                    </li>                 
                </ul>  
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Que buscar.." aria-label="Search"/>
                    <button className="btn btn-outline-success text-white" type="submit">Buscar</button>
                </form>
                </div>
            </div>
        </nav>
    )
}
export default Header;