import React from 'react';
import { useState } from 'react';


export default function TwowayBinding(){

    const [product ,setproduct] =useState({Name:'',Price:0,City:'',Stock:false})

     function handleName(e){
     setproduct({
        Name: e.target.value,
        Price: product.Price,
        City: product.City,
        Stock: product.Stock
  
       }

     )

    function handlePrice(e){
      setproduct({
        Name:product.Name,
        Price:e.target.value,
        City:product.City,
        Stock:product.Stock
      })

    }
    function handleCity(e){

      setproduct({
        Name:product.Name,
        Price:product.Price,
        City:e.target.City,
        Stock:product.Stock
      })
    }
    function handleStock(e){

        setproduct({
            Name:product.Name,
            Price:product.Price,
            City:product.City,
            Stock:e.target.checked
        })
        
    };

    // useEffect(()=>{
    // handleName();
    // handleCity();
    // handlePrice();
    // handleStock();

    // },[])

    return(
        
<div className='container-fluid'>
<div className='row'>
<div className='col-3'>
<h2>Register Product</h2>
<dl>
<dt>Name</dt>
<dd><input className='form-control'  type='text' onChange={handleName}></input></dd>
<dt>Price</dt>
<dd><input className='form-control'   type='text' onChange={handlePrice}></input></dd>

<dt>City</dt>
<dd>
<select className='form-select' onChange={handleCity}>
<option>Delhi</option>
<option>Hydrabd</option>
</select>
</dd>

<dt>Stocks</dt>
<dd className='form-switch'>
<input className='form-check-input' type='checkbox' onChange={handleStock}></input>Available
</dd>

</dl>

<button className='btn btn-primary w-100'>Register</button>
</div>

<div className='col-9'>
<h2>Display Detail</h2>
<dl>
<dt>Name</dt>
<dd>{product.Name}</dd>
<dt>Price</dt>
<dd>{product.Price}</dd>
</dl>


</div>

</div>

</div>

        
    
    )
     }}