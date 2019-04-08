import React from 'react'

// const Pixel = () => {
//   return (
//     <div style={{
        // height: '1em',
        // width: '1em',
        // backgroundColor: 'green'    
//     }}></div>
//   )
// }

class Pixel extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            style: {
                height: '1em',
                width: '1em',
                backgroundColor: this.randomHexColor()
            }
        }
    }

    randomHexColor() {
        return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    }

    render () {
        return(    
            <div style={this.state.style} className="pixel"></div>
        )
    }
}

class Pixels extends React.Component {
    render(){

        let pixelsArray = []
        for (let i = 0; i < 1000; i++) {
            pixelsArray.push(<Pixel />)
            }
        return (pixelsArray)
    }
}

export default Pixels
