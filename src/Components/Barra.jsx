import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Barra = () => {
  return (
    <Navbar className="barraColor">
      <Container className="justify-content-center">
        <Link to="/" className="text-white mx-2 text-decoration-none">Home</Link>
        <Link to="/favoritos" className="text-white text-decoration-none">Favoritos</Link>
      </Container>
    </Navbar>
  )
}

export default Barra