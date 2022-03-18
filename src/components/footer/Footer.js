import React from "react";
import './Footer.css';

export const Footer = () => {
    return (
        <>
            <section id="contact-info" className="bg-dark">
                <div className="container">
                    <div className="box">
                        <i className="fa-solid fa-hotel fa-3x"></i>
                        <h3>Ubicación</h3>
                        <p>50 oeste Bar Fofo, Mercedes Sur Heredia</p>
                    </div>
                    <div className="box">
                        <i className="fa-solid fa-phone fa-3x"></i>
                        <h3>Teléfono</h3>
                        <p>(505) 555-555</p>
                    </div>
                    <div className="box">
                        <i className="fa-solid fa-envelope fa-3x"></i>
                        <h3>Correo Electrónico</h3>
                        <p>contact@lfstudio.com</p>
                    </div>
                </div>
            </section>

            <footer id="main-footer">
                <p>Look Form Studio &copy; 2022, Todo los derechos reservados</p>
            </footer>
        </>
        
        )
}