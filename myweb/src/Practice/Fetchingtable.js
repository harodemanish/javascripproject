import { useEffect, useState } from "react"

export default function Fetchingtable(){

   
    const [mars ,setMars] = useState({});

     function Loadtable(){
       fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=DEMO_KEY")
       .then(Response=>Response.json())
       .then(data=>{
        setMars(data);

       })
    }
       useEffect(()=>{
      
     Loadtable();
       },[])
     


    return(
        <>
        
        
            
                <table className=" table table-hover">
                <thead>
                <tr>
                <th>Photo Id</th>
                <th>camera Name</th>
                <th>Rover Name</th>
                <th>Previe</th>
                </tr>
                </thead>

                <tbody>
                {
                    // when property can not read by react libaray that time we use chaining ?
                   mars.photos?.map(photo=>
                        <tr>
                        <td>{photo.id}</td>
                      
                        <td>{photo.camera.full_name}</td>
                        
                        <td>{photo.rover.name}</td>
                        <tr style={{width:"50px"}}>{photo.img_src}</tr>

                        </tr>

                   )  
                }
    
                </tbody>

                </table>
            
    
        
        </>
    )
};