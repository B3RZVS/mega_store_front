import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';



const AppsRo = () => {
  return (
    <Routes>
        {/* AGREGAR LA RUTA Y EL COMPONENTE */}
      {/* Ejemplo con home, url 'http://localhost:5173/appsRo/homero' */}
      <Route path="/homero" element={<Home />} />
      
    </Routes>
  );
};

export default AppsRo;