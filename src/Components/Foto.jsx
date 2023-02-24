import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MyContext from '../Context/MyContext.jsx';
import {FaHeart} from 'react-icons/fa';


const Foto = ({ foto }) => {
  console.log(foto);

  const { fotos, setFotos } = useContext(MyContext);

  const setFavorito = (id) => {
    const click = fotos.findIndex((f) => f.id === id);
    fotos[click].liked = !fotos[click].liked;
    setFotos([...fotos]);

  }

  return (

    <Card style={{ width: '20vw', marginBottom: '2vw' }}>
      <Card.Img className='estilos' variant="top" src={foto.src.medium} />
      <Button onClick={() => setFavorito(foto.id)} style={{ backgroundColor: 'transparent', border:'none', position: 'absolute', marginLeft: '17vw' }} > <FaHeart style={{color: foto.liked? "red":"white"}}></FaHeart> </Button>
      <Card.Body style={{ color:'white', position: 'absolute', marginTop: '14vw'}}>
        {foto.alt}
      </Card.Body>
    </Card>
  )

}



export default Foto