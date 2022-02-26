import React from 'react';
import {App} from "./App.js";


class Feedback extends React.Component{

    

    render(){
       
        console.log(this.props);
         
        return(
            <>
         
           <div className="wrapper">
               
                   {this.props.data.map((value)=>{

                       return (
                        <div className='box'>
                           <span>Name:</span>{value.name} || <span>Department: </span>{value.dept} || <span>Rating:</span>{value.rating}
                           </div>
                       )
                      
                   })}
                  
               
           </div>

           </>

            
        )
    }
}

export default Feedback;