import React,{useState} from 'react'

function Card({cart,setCart,cardData}) {
  
  let [toggle,setToggle]=useState(true);
  let count;
  if(cardData.product.toUpperCase()=="SPECIAL ITEM"||cardData.product.toUpperCase()=="SALE ITEM")
             {
              count=<div><span className="text-muted text-decoration-line-through">{cardData.price1}</span><span>{cardData.price2}</span>
              </div> 
             }
             else if(cardData.product.toUpperCase()=="FANCY PRODUCT")
             {
              count=<div><span>{cardData.price1}-</span><span>{cardData.price2}</span>
              </div>
             }
             else
             { 
               count=cardData.price1
             }
            
  return  <div className="col mb-5">
  <div className="card h-100">
     <div className={cardData.product?"badge bg-dark text-white position-absolute":""} style={{top: "0.5rem",right: "0.5rem"}}>
      {cardData.product.toUpperCase()=="SPECIAL ITEM" || cardData.product.toUpperCase()=="SALE ITEM"?"Sale":""}</div>
      <img className="card-img-top" src={cardData.img} alt="..." />
      <div className="card-body p-4">
          <div className="text-center">
              <h5 className="fw-bolder">{cardData.product}</h5>
              {
                cardData.review?<><div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>                    
                </div></>:""
              }
              {
                count
              }
             
              
          </div>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {
                 toggle?
                 <button className="btn btn-outline-dark mt-auto" 
                 onClick={()=>{
                     setCart(cart+1);
                     setToggle(false);
                     }}>
                     Add to cart
                 </button>:
                 <button className="btn btn-outline-dark mt-auto" 
                 onClick={()=>{
                    setCart(cart-1);
                    setToggle(true);
                    }}>
                    Remove from cart
                 </button>
            }
         
          </div>
      </div>
  </div>
</div>
}

export default Card