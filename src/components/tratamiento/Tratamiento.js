import React, {useState} from "react";
import styles from './Tratamiento.module.css';

export const Tratamiento = ({ id, Nombre, Precio }) => {
    const [checked, setChecked] = useState(false);

    const checkedHandler = e => setChecked(e.target.checked);

    const Chequeado = () => {
        return <span>Chequeado</span>
    }

    const SinChequear = () => {
        return <span>Sin chequear</span>
    }

    return (
        // <li className={styles.listItem}>
        //     <span className={ checked ? styles.checked : undefined }>
        //         {id} | {nombre}
        //     </span>
        //     <input type="checkbox" onChange={ e => checkedHandler(e) } />
        //     { checked ? <Chequeado/> : <SinChequear />}
        // </li>
        <tr>
            <td>{id}</td>
            <td>{Nombre}</td>
            <td className={styles.precio}>{Precio}</td>
            <td><span><button>Modificar</button></span></td>
            <td><button>Eliminar</button></td>
        </tr>
    )
}