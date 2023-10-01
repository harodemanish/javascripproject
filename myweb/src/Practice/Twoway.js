import React from "react"
import { useState } from "react"
export default function Twoway(){

const [Product,setProduct] = useState({Name:'',Price:0,City:'',Stock:''})

function handleName(e){

    setProduct({
      Name: e.target.value,

    })
}


function handlePrice(e){
setProduct({
    Name:Product.Name,
Price:e.target.value
})

function handleCity(e){
    setProduct({
    
    City: e.target.City
    })
}

// function handleStock(e){
//     setProduct({
//         Stock:e.target.checked
//     })
// }

}
    return(
        <>
        <div className="row">
        <div className="col-3">
        <h2>Register Product</h2>
 <dl>
 <dt>Name</dt>
 <dd><input type="text" className="form-control" onChange={handleName}></input></dd>
 <dt>Price</dt>
 <dd><input type="text" className="form-control" onChange={handlePrice}></input></dd>

 <dt>City</dt>
 <select  className="form-select" >
 <option>Delhi</option>
 <option>Hydrabd</option>
 <option>Jammu</option>
 </select>

 <dt>Stock</dt>
 <dd className="form-switch">
 <input type="checkbox" className="form-check-input"></input> Available</dd>
 </dl>
        
        
        </div>
        
        </div>

        <div className="col-9">
        <dl>
      
        <h2>Display detail</h2>
        <dt>Name:</dt>
        <dd>{Product.Name}</dd>

        <dt>Price</dt>
        <dd>{Product.Price}</dd>

        
        <dt>City</dt>
        <dd>{Product.City}</dd>

        
    
        </dl>
    

        </div>
    
        
    

        </>
    )
}
