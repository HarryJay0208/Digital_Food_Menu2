import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Fooddata from './Data';

const Home = () => {

    const [menu,setMenu] = useState(Fooddata);

    const filteritems = (curiteams)=>{
        const updateitems = Fooddata.filter((cur,ind)=>{
            return cur.category == curiteams
        });
        setMenu(updateitems)

    }
   

  return (
    <>
     <section className='container mt-2'>
        <h2 className='text-center mb-2' style={{fontWeight:400}}>SEARCH YOUR ITEM</h2>
        
        <div className="btn-container d-flex justify-content-around mt-2">

        <Button variant="primary" onClick={()=>filteritems("punjabi")}>Punjabi</Button>
        <Button variant="success" onClick={()=>filteritems("vadapav")}>vadapav</Button>
        <Button variant="danger" onClick={()=>filteritems("Pizza")}>Pizza</Button>
        <Button variant="primary" onClick={()=>filteritems("Chai")}>chai</Button>
        <Button variant="success" onClick={()=>filteritems("Frankie")}>frainky</Button>
        <Button variant="danger" onClick={()=>setMenu(Fooddata)}>All</Button>
        </div>

        <div className="container mt-3">
            <div className="row d-flex justify-content-around align-items-center">
            {
               menu.map((el,ind)=>{
                return(
                    <>
                     <Card style={{ width: '22rem',border:"none" }} className='mx-2 mt-4'>
      <Card.Img variant="top" src={el.imgdata} style={{height:"16rem"}} className="mt-3" />
      <Card.Body>
        <Card.Title>{el.rname}</Card.Title>
        <Card.Text>
          Price:{el.price}
        </Card.Text>
        <Button variant="primary">Order!</Button>
      </Card.Body>
    </Card>  
                    </>
                )
               })
            }



            </div>
        </div>
        </section> 
    </>
  )
}

export default Home
