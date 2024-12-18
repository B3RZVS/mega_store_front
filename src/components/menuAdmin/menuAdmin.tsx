import styles from './menuAdmin.module.css';
import AccordionUsage from './acordion';
import { useEffect, useState } from 'react';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/LoginContext';



const Menu = () => {
    const{rol, logout} = useAuth()
    const [rolG, setRol] = useState<string | null>(null);

    // Recupera el valor del rol desde localStorage
    useEffect(() => {
        const rolGuardado = localStorage.getItem("rol");
        setRol(rolGuardado); // Guarda el rol en el estado local
    }, [rol]);

    const cerrarSesion=()=>{
        setRol(null)
        logout()
    }

    //estado para contrlar la visibilidad del Menu desplegable
    const [isMenuOpen, setMenuOpen] = useState(false);

    
    // Función para ir cambiando el estado del menú
    const toggleMenu = () => { //Función para abrir el desplegable
        setMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => { //función para cerrar el desplegable
        setMenuOpen(false);  // Cerrar menú cuando el mouse salga del ícono o del menú
    };

    const navigate = useNavigate(); // Hook para navegar a otras rutas

    const handleNavigation = () => {
       navigate('/sesion'); // Navegar a la ruta especificada
    };
    const handleCatalogo=()=>{
        navigate('/catalogoProductos')
    }
    const handleHome=()=>{
        navigate('/home')
    }
    const handleNosotros=()=>{
        navigate('/nosotros')
    }

    
    const location = useLocation();
    const isHome = location.pathname === '/home';
    

    return (
    <div className={styles.container1}>
        <div className={styles.header}>
            
            <img src='/logo.png' alt="Logo" width="100" height="60" /> {/* Ajusta el tamaño según sea necesario */}
            <div className={styles.container2}>
                {rolG=='4' ? 
                    <button className={styles.options} onMouseEnter={toggleMenu}><DensityMediumIcon/>{/* Agrega el ícono dentro del botón */}
                    </button>
                :''}
                
            
            {/* Contenido del menú que se muestra/oculta según el estado */}
                {isMenuOpen && (
                    <a className={styles.dropdownContent} onMouseLeave={closeMenu}>
                    <AccordionUsage />
                    </a>   
                )}
            </div> 
            <h1 className={styles.title} onClick={()=>handleHome()}>{isHome ? 'MegaStore':'MegaStore - Panel de Administración'}</h1> 

            <div className={styles.components}>
                <a className={styles.seleccion2} onClick={handleNosotros} >Nosotros</a>

                {rolG == '4'? 
                <>
                <a className={styles.seleccion2} onClick={handleCatalogo}>Productos</a>
                <a className={styles.seleccion2}>Estadísticas</a>
                <a className={styles.seleccion2} onClick={ ()=> cerrarSesion()}>Cerrar Sesion</a>
                </>
                :''}
                <a className={styles.seleccion2} onClick={handleNavigation}> < PersonIcon /></a>
            </div>

        </div>
        
    </div>
    );
};

export default Menu
