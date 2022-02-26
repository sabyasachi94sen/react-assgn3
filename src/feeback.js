import React from 'react';



class Feedback extends React.Component{

    

    render(){
       
       
         
        return(
            <>
         
           <div className="wrapper">

               
                   {this.props.data.map((value,index)=>{

                       
                        return (<div className='box'>
                           <span>Name:</span>{value.name} || <span>Department: </span>{value.dept} || <span>Rating:</span>{value.rating}
                           </div> )
                    
                      
                   })}
                  
               
           </div>

           </>

            
        )
    }
}

export default Feedback;