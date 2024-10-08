import styles from './menu.module.css';
import AccordionUsage from './acordion';
import { useState } from 'react';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PersonIcon from '@mui/icons-material/Person';



const Menu = () => {
    //estado para contrlar la visibilidad del Menu desplegable
    const [isMenuOpen, setMenuOpen] = useState(false);

    // Función para ir cambiando el estado del menú
    const toggleMenu = () => { //Función para abrir el desplegable
        setMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => { //función para cerrar el desplegable
        setMenuOpen(false);  // Cerrar menú cuando el mouse salga del ícono o del menú
    };

    return (
    <div className={styles.container1}>
        <div className={styles.header}>
            <img src="logo.png" alt="Logo" width="100" height="60" /> {/* Ajusta el tamaño según sea necesario */}
            <div className={styles.container2}>
                <button className={styles.options} onMouseEnter={toggleMenu}  > < DensityMediumIcon />  {/* Agrega el ícono dentro del botón */}</button>{/* Botón de navegación */} 
                {/* Contenido del menú que se muestra/oculta según el estado */}
                {isMenuOpen && (
                    <div className={styles.dropdownContent}onMouseLeave={closeMenu}>
                    <AccordionUsage />
                    </div>   
                )}
            </div> 
            <h1 className={styles.title}>MegaStore</h1> 
            <div className={styles.components}>
                <div className={styles.seleccion}> < LocalGroceryStoreIcon /> </div>
                <div className={styles.seleccion}> < PersonIcon /></div>
                <div className={styles.seleccion2}>About us</div>
                <div className={styles.seleccion2}>Contacto</div>
            </div>
        </div>

        <main className={styles.mainContent}> 
            
        </main>

       
    </div>
    );
};

export default Menu
