
import { useState,useEffect } from 'react';


export default function Fetching(){
 const [category,setCategory] = useState([]);
const [products ,setProduct]  = useState([]);
const [cartItems,setCartItems] = useState([]);

 // from the deta will come where to store at the time of laoding deta mustt be ready 
// useEffect(()=>{

   // fetch("")
    // fetch deta comming in binary form it need to convert json form

    //.then(response=>Response.json())

    // then we have to collect the deta and this deta we need to store inside the mars
    // so we need the setter
   // .then(data=>{
       // setMars(data);
    // })
    // javascript fetch method is going to fetcch deta from api 
    // whatever deta from api it will return in json after returing the deta we collect the deta
    // after collecting deta then sent into mars


// },[])

function LoadCategory(){
    fetch("https://fakestoreapi.com/products/categories")

    .then(response=>response.json())
    .then (data=>{
        data.unshift("all");
        setCategory(data);
    })
}




function LoadProduct(url){

    fetch(url)
    .then(Response=>Response.json())
    .then(data=>{
        setProduct(data);
    })
}

useEffect(()=>{
    LoadCategory();
    LoadProduct("https://fakestoreapi.com/products");
    },[])



    function handleCategotyChange(e){
      
        if(e.target.value=="all"){
            LoadProduct("https://fakestoreapi.com/products");
        }else {

        

     LoadProduct(`https://fakestoreapi.com/products/category/${e.target.value}`)
    }
    }


    function handleAddtoCart(e){
    
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
        .then(response=>response.json())
        .then(deta=>{
            setCartItems(deta);
        })
        console.log(cartItems);
            
    }

    return(
        <>
        <h1>
        Shoping Component</h1>
        <div className="container-fluid over">
        <header className="bg-danger text-white text-center p-2">
        <h1><span className="bi bi-cart"></span>Shopping Home Delivery</h1>
        
        </header>
    
        <nav className='col-3'>
        
        <label>Select Category</label>
        <div>
        <select onChange={handleCategotyChange} className="form-select">
        
        {
            category.map(category=>
                <option key={category}>{category}</option>
                
            
                )
        }
        </select>
        </div>
        </nav>
        <div>
<main className='col-9 d-flex flex-wrap overflow-auto'>
{

    // inside main we have to dispaly all the product detail
    products.map(products =>{
        return(
    <div key={products.id} className="card m-2p-2 w-25" >
   
    <img src={products.image} className="card-img-top" height="150" alt="loading.."></img>
    <div className="card-header" style={{height:"200px"}}>
    <p>{products.title}</p>
    
    </div>
    <div className="card-body">
    <dl>
    <dt>Price</dt>
    <dd>{products.price}</dd>
    <dt>Rating</dt>

<dd>
<span className="bi bi-star-fill text-success"></span>
{products.rating.rate}<span>[{products.rating.count}]</span>

</dd>


    </dl>

    </div>

    <div className='card-footer'>
    <button id={products.id} onClick={handleAddtoCart} className='btn btn-danger w-100'>
    
    <span className='bi bi-cart4'></span>Add To cart
    </button>
    </div>

    </div>

        )
    })
}

</main>
        
        
        </div>

    
    
        
        </div>
    
        </>
    )
}