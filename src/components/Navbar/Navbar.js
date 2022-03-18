import  { NavLink, Outlet } from 'react-router-dom';
import './Navbar.css';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const name = useSelector(state => state.name);

  return (
    <div>
      <div className='nav-container'>
        <nav id="navbar">
          <div className='container'>
            <h1>Look Form'Studio</h1>
            <ul>
              <li>
                <NavLink to='/' className="current">Inicio</NavLink>
              </li>
              <li>
                <NavLink to='/tratamientos'>Tratamientos</NavLink>
              </li>
              <li>
                <NavLink to='/nueva'>Acerca de</NavLink>
              </li>
              <li>
                <NavLink to='/login'>{name}</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
    
  );
}

// const mapStateToProps = (state) => {
//   return {
//     name: state.name   // Revisar aquí si no sirve
//   }
// }

// export default connect(mapStateToProps)(Navbar);
export default Navbar;