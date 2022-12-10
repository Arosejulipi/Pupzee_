import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import colorSchemesExampl from "./colorSchemesExampl.css"

function ColorSchemesExample() {
  return (
   
     <Navbar > 
  
        <Container className='navbar-container'>
          <Nav className="me-auto" >
          <Link to={"/"} >Todo</Link>
          <Link to={"/category/Accion"} >Acción</Link>
            <Link to={"/category/Aventura"}   >Aventura</Link>
            <Link to={"/category/Multijugador"} >Multijugador</Link>
          </Nav>
        </Container>
      </Navbar>
 
  );
}

export default ColorSchemesExample;