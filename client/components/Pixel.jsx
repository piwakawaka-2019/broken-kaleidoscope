import React from 'react'

export default class Pixel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
            height: '200px',
            width: '200px',
            backgroundColor: this.randomHexColor()
            }
        }
    }

    clickHandler = evt => {
        this.setState({
            style: {
                height: '200px',
                width: '200px',
                backgroundColor: this.randomHexColor()
            }
        })
    }

    mouseEnterHandler = evt => {
        this.setState({
            style: {
                height: '200px',
                width: '200px',
                backgroundColor: this.randomHexColor()
            }
        })
    }

    rightClickHandler = evt => {
        this.setState({
            style: {
                height: '100px',
                width: '100px',
                backgroundColor: 'black'
            }
        })
        event.preventDefault()
    }

    doubleClickHandler = evt => {
        this.setState({
            style: {
                height: '200px',
                width: '200px',
                backgroundColor: 'white'
            }
        })
    }

    // dragEnterHandler = evt => {
    //     this.setState({
    //         style: {
    //             height: '200px',
    //             width: '200px',
    //             backgroundColor: 'yellow'
    //         }
    //     })
    // }

    randomHexColor = () => 
        `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

    render () {
        return (
        <div 
        style={this.state.style} 
        onClick={this.clickHandler} 
        onMouseEnter={this.mouseEnterHandler}
        onContextMenu={this.rightClickHandler}
        onDoubleClick={this.doubleClickHandler}
        onDragEnter={this.dragEnterHandler}
        >
        </div>
        )
    }
}