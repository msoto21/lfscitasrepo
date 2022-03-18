// import data from '../../data.json';
import React, { useEffect, useState } from 'react';
import { Tratamiento } from '../tratamiento/Tratamiento';
import './Tratamientos.css';
import  { NavLink, Outlet } from 'react-router-dom';

export const Tratamientos = () => {

    const [ data, setData ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // .Net API: lfscitasapi
            // let response = await fetch("http://localhost:5000/api/tratamientos/");
            // Node API: lfscitasnodeapi
            let response = await fetch("http://localhost:3002/");
            let tratamientos = await response.json();
            setData(tratamientos);
        }
        fetchData();
    }, []);

    return (
        <>
            {/* <ul>
                {data.map(
                    (tratamiento) => typeof tratamiento.id != "undefined" && <Tratamiento key={tratamiento.id} id={tratamiento.id} nombre={tratamiento.nombre} />
                )}
            </ul> */}
            <div className='tratamientos'>
                <h1>Tratamientos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(
                            (tratamiento) => typeof tratamiento.id != "undefined" && 
                                <Tratamiento key={tratamiento.id} id={tratamiento.id} 
                                Nombre={tratamiento.Nombre} Precio={tratamiento.Precio} />
                        )}
                    </tbody>
                </table>
                <NavLink className='btn-nuevo' to='/newtratamientosform'>Nuevo tratamiento</NavLink>
            </div>
        </>
    )
}