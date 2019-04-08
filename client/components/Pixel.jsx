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
        console.log("Props: ", this.props)
        this.state = {
            style: {
                height: '1em',
                width: '1em',
                backgroundColor: 'green'
            }
        }
    }

    render () {
        return (
            <div style={this.state.style}></div>
        )
    }

}

export default Pixel