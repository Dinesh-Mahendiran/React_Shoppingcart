import React,{useState} from 'react'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Card from './components/Card'

function App() {
  let [cart,setCart]=useState(0); 
  let card1=[
    {
      product:"Fancy Product",
      price1:"$40.00",
      price2:"$80.00",
      img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      review:false
    },
    {
      product:"Special item",
      price1:"$20.00",
      price2:"$18.00",
      img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      review:true
    },
    {
      product:"Sale Item",
      price1:"$50.00",
      price2:"$25.00",
      img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      review:false
    },
    {
      product:"Popular Item",
      price1:"$40.00",
      price2:"$18.00",
      img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      review:true
    },
    {
      product:"Sale Item",
      price1:"$50.00",
      price2:"$25.00",
      img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      review:false
    },
    {
      product:"Fancy Product",
      price1:"$120.00",
      price2:"$280.00",
      img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      review:false
    },
    {
      product:"Special Item",
      price1:"$20.00",
      price2:"$18.00",
      img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      review:true
    },
    {
      product:"Popular Item",
      price1:"$40.00",
      price2:"$18.00",
      img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      review:true
    }]
  return<>
  <TopBar cart={cart} setCart={setCart}/>
  <Header/>
  <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {
          card1.map((e,i)=>{
            return <Card  cart={cart} setCart={setCart} cardData={e} key={i}/>
          })
        }
         
  </div>
  </div>
  </section>
  </>
   
}

export default App