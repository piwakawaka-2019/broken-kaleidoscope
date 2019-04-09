import React from 'react'

// const Pixel  = () => {
//   return (
//     <div style={{
//         fontFamily: 'Arial',
//         height: '50px',
//         width: '50px',
//         backgroundColor: 'skyblue'
//     }}>
      
//     </div>
//   )
// }

class Pixel extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      style: {
        backgroundColor: this.getRandomColor(),
        height: "3px",
        width: "3px"
      }
    }
   
  }



  changeBackgroundColor(color){

    
    this.setState({
      style: {
          ...this.state.style,
          backgroundColor: color
      }
    })
  }

  getRandomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

  clickHandler = evt => {
    let newColor = this.getRandomColor();
    this.changeBackgroundColor(newColor);
  }

  mouseEnterHandler = evt => {
    let newColor = 'green';
    this.changeBackgroundColor(newColor);
  }

  onContextMenuHandler = evt => {
    let color = 'black';
    this.changeBackgroundColor(newColor);
  }

  onDoubleClickHandler = evt => {
    let color = 'white';
    this.changeBackgroundColor(newColor);
    evt.preventDefault()
  }

  onDragEnter = evt => {
    let color = 'yellow';
    this.changeBackgroundColor(newColor);
    evt.preventDefault()
  }


  
  render(){
   
    
    return(
      <div 
        style={this.state.style} 
        onClick={this.clickHandler.bind(this)} 
        onContextMenu={this.onContextMenuHandler.bind(this)} 
        onDoubleClick={this.onDoubleClickHandler.bind(this)} 
        onDragEnter={this.onDragEnter.bind(this)} 
        onMouseEnter={this.mouseEnterHandler.bind(this)}>

      </div>
    )
  //   return (
  //     <div>
  //     <h1>React development has begun!</h1>
  //     <a href='http://google.com' onClick={this.handleClick.bind(this)}>Google</a>
  //     <button 
  //       onClick={this.toggleGreeter.bind(this)}
  //       onMouseEnter={() => this.setState({toggleLabel: 'Switch'})}
  //       onMouseOut={() => this.setState({toggleLabel: 'Toggle'})}
  //     >{this.state.toggleLabel}</button>
  //     {this.state.showGreeter && <Greeter greeting='hello'/>}
  //     </div>
  //   )
  // }
}
}

export default Pixel 
