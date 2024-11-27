import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Style from '../../components/categorias/todasCategorias.module.css';
import { useEffect, useState} from 'react';
import { useMarca } from '../../contexts/MarcaContext';
import ModalPut from '../../components/modalPut/ModalPut';
import { BaseObjeto } from '../../components/modalPut/ModalPut';
import { Marca } from '../../contexts/MarcaContext';
    

export default function CheckboxList() {
  const {marcas, fetchMarcas } = useMarca();
  const [open, setOpen] = useState(false)
  const [marcaSelect, setMarcaSelect]= useState<BaseObjeto | null>(null)
  
  useEffect(()=>{
    fetchMarcas()
  },[])

  console.log(marcas)

  const modalPut= (abrir:boolean) =>{
    setOpen(abrir)
  }
  const handleModalClose = () => {
    setOpen(false); // Actualiza el estado en el padre
  };
  const handleMarcaClick = (marca : Marca)=>{
    
    setMarcaSelect({
      id: Number(marca.id), // Convierte a number
      nombre: marca.nombre,
      fechaEliminacion: marca.fechaDeEliminacion || '',
    });
    modalPut(true)
  };

  
  return (
    
    <List className={Style.list}>

      {(marcas ?? []).map ((marca, idx) => {

        const labelId = `checkbox-list-label-${idx}`;
        return (
          <>
          <ListItem
            key={marca.id}
            disablePadding
            className={Style.contCategorias}
          > 
              <ListItemText id={labelId} primary={`${marca.nombre}`} className={Style.item} onClick={()=>handleMarcaClick(marca)}>
              </ListItemText>
          </ListItem>
          
          </>
        );
      })}
      <ModalPut open={open} onClose={handleModalClose} objeto={marcaSelect}/>
    </List>

  );
}