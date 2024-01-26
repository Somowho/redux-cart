
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
                                //The updated state in the cart after its added
    const cartProducts = useSelector(state => state.cart);  //it is used to recieve the products in the cart slice
    return(
//The useSelector hook allows access to the state stored in a redux store, while the useDispatch hook
// enables dispatching of the actions to the store.        
        
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
        <Nav>
        
            <Nav.Link to="/" as={Link}>Products</Nav.Link>
           
          </Nav>
        
        <Navbar.Toggle />

        <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>

            <Nav.Link to="/cart" as={Link}>My Bag {cartProducts.length}</Nav.Link>

            </Navbar.Text>

        </Navbar.Collapse>

        
      </Container>
    </Navbar>
  );


        
    
}

export default NavBar;