import { Badge, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  
  const data = [
    {
      productImage:"https://cdn.citymapia.com/kottayam/bon-bons-supermarket/29971/Portfolio.jpg?biz=8282",
      productName: "Fancy Products",
      price: "$40 - $80",
      rating: "❤❤❤",
    },
    {
      productImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBSi_twG6hC6rxHDdh_ygkaN8QoA385NvjKQ&usqp=CAU ",
      productName: "Sports",
      price: "$10 - $100",
      rating: "❤❤❤❤❤",
    },
    {
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC0HrsQKG2eInPLhkSKAZhH9JQAUJHnpJ8oA&usqp=CAU",
      productName: "Toys",
      price: "$7 - $777",
      rating: "❤❤❤❤",
    },
    {
      productImage:
        " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQezynQMNrD-6iIILEDmkHAUhKII--W4CHwSQ&usqp=CAU",
      productName: "Electronics",
      price: "$1 - $99",
      rating: "❤❤❤",
    },
    {
      productImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWuIkFw-ApLA2nv1J5Afzy-Ba1kDFIdfTHg&usqp=CAU ",
      productName: "Kitchen",
      price: "$4 - $44",
      rating: "❤❤❤❤",
    },
    {
      productImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMynfJLYjqo9hFnIoy5-ztV2jYRnVmSzfSkQ&usqp=CAU",
      productName: "Cloths for Mens",
      price: "$10 - $99",
      rating: "❤❤❤❤❤",
    },
    {
      productImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQupOoaBlWgakrt3cP2JQD-D9631DX5C389pQ&usqp=CAU ",
      productName: "Cloths for kids",
      price: "$5 - $40",
      rating: "❤❤❤❤❤",
    },
   
    {
      productImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRR4_ZhztP0SvApVMUU7_o8X44w0Zb041YNA&usqp=CAU ",
      productName: "Coths for womens",
      price: "$4 - $99",
      rating: "❤❤❤❤❤",
    },
  ];

  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div className="cart-value">
    <h1> <Badge bg="secondary">
        CART {count}
      </Badge></h1>
      </div>
      <div className="bord">
      <h1>Shop In Style</h1>
  </div>

     <div className="card-container">
      {data.map((prod, idx)=> <Cards
      idx = {idx}
      prod = {prod}
      setCount= {setCount}
      count = {count}
      />)}

      </div>
    </div>
  );
}

export default App;

function Cards({prod, idx, setCount, count}){
  const [show, setShow] = useState(false);

  function addToCart(){
    setShow(!show)
    setCount(count + 1)
  }

  function removeFromCart(){
    setShow(!show)
    setCount(count - 1)
  }

  return (
      <Card key = {idx} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.productImage} height="150px" />
        <Card.Body>
          <Card.Title>{prod.productName}</Card.Title>
          <Card.Text>{prod.price} </Card.Text>
          <Card.Text>{prod.rating} </Card.Text>

         {!show ? <Button
           variant="primary"
           onClick={addToCart}
           >Add cart</Button> : ""}


           {show ? <Button 
           variant="danger"
           onClick={removeFromCart}
           >remove cart</Button> : ""}

        </Card.Body>
      </Card>
  )
}