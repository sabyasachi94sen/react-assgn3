import React from 'react'
import Feedback from './feeback';
import './index.css';



// npm i react-router-dom
// npm i react-router-dom






export class App extends React.Component{

  
  constructor(){
    super();
    this.state={

      name : "",
      dept :"",
      rating : "",
      divState:true,
      user :[]
    }
  }
   handleChange=(event)=>{
   

    this.setState({
      [event.target.name]: event.target.value})
    
   }

   clickHandler=(event)=>{

   

    var tempObj={
      name: this.state.name,
      dept : this.state.dept,
      rating: this.state.rating,
      
    }

    var Arr=this.state.user;
    Arr.push(tempObj);
    this.setState({user: Arr,divState:true});
  console.log(this.state.user);
    


   }



  render(){

    
     
  
    return (

     <>{this.state.divState ?
     
      <div className="forms">
        <h2 >EMPLOYEE FEEDBACK FORM</h2>
     <div className="forms-div">
        <label >Name: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>
        <input type="text" name="name" id="name" onChange={this.handleChange}></input>
        <p></p>
        <label>Department: &nbsp;</label>
        <input type="text" name="dept" id="dept" onChange={this.handleChange}></input>
        <p></p>
        <label>Rating: &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;</label>
        <input type="number" name="rating" id="Rating" onChange={this.handleChange}></input>
        <p></p>
        <button className="btn1" onClick={()=>{
           this.clickHandler();
          this.setState({divState:!this.state.divState})
         
        }}>Submit</button>

     

      </div>
      </div> :
      <div className="forms">
        <h2>FEEDBACK FORM DATA</h2>
      
        <Feedback data={this.state.user} />
        <button className="btn2" onClick={()=>this.setState({divState:!this.state.divState})}>Back</button>

      </div>}

      </>
    

      
      
    )
  }
}



  
 

