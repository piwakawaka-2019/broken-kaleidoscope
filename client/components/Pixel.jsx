import React from 'react'

class Pixel extends React.Component{

  constructor(props){
    super(props)
    this.state ={
       style:{
        height:"50px",
        width:"50px",
        backgroundColor:"cornflowerblue"
        }
    
        
    }
//this.setState ({style})
    }
       
  
    render() {
      const {style} =this.state
  

      return(
        <div style={style}/>
   
      )

     }
}
export default Pixel
