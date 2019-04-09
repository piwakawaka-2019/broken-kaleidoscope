import React from 'react'

class Pixel extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            style: {
                height: '5px',
                width: '5px',
                backgroundColor: this.randomHexColor()
            }
        }
    }

    randomHexColor() {
        return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    }

    clickHandler = evt => {
        this.setState({
            style: {
                height: '5px',
                width: '5px',
                backgroundColor: this.randomHexColor()
            }
        })
      }

    render () {
        return(    
            <div onMouseOver={this.clickHandler} style={this.state.style} className="pixel"></div>
        )
    }
}

class Pixels extends React.Component {
    render(){

        let pixelsArray = []
        for (let i = 0; i < 100000; i++) {
            pixelsArray.push(<Pixel />)
            }
        return (pixelsArray)
    }
}

export default Pixels
