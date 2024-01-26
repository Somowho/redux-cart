import {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux';
import {add} from '../components/store/cartSlice';


const Product = () => {

        const dispatch = useDispatch()

        const [products, getProducts] = useState([])
        useEffect(() => {
        //api

        fetch('https://fakestoreapi.com/products')
        .then(data => data.json()) // convert to JSON
        .then(result => getProducts(result)) //put all the results in products
    }, []);

    
    const addToCart = (product) => {
        // dispatch an add action or to send off to a destination
        dispatch(add(product))

    }


    const cards = products.map((product) =>    // for each product in the whole products in the api

        <div className='col-md-3' style={{ marginBottom: '10px'}}>
             <Card key={product.id} className='h-100'>

        <div className='text-center'>
          <Card.Img variant="top" src={product.image} style={{width : '100px', height: '130px'}} />
        </div>
        

         <Card.Body>
           <Card.Title>{product.title}</Card.Title>
          <Card.Text>
          
            ${product.price}

          </Card.Text>
           
          </Card.Body>

    <Card.Footer style={{ background : 'white'}}>
        <Button variant="primary" onClick={()=> addToCart(product)}>Add To Cart</Button>
    </Card.Footer>

     </Card>

        
        </div>
      )

  return (
    <>
    <h1 className='text-center'>Octo Dashboard</h1>
    <div className='row'>
        {cards}
    </div>

    </>
    
  )
}

export default Product