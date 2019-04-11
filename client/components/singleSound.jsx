import React from 'react'

class singleSound extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            content: '',
            style: {
                height: '250px',
                width: '300px',
                backgroundColor: 'grey'
            }
        }
    }

    componentDidMount() {
        // document.addEventListener('onkeydown', this.keyDownHandler)
        document.getElementById("body").addEventListener("keydown", this.keyDownHandler);
        window.focus()
    }

    keyDownHandler = evt => {
        this.setState({
            content: event.key
    })}
    

    render(){
        return (
            <div onKeyDown={this.keyDownHandler} style={this.state.style} className="soundlet" id={this.props.id}>
                {this.state.content}
            </div>)
    }
}


export default singleSound