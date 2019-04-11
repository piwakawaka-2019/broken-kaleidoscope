import React from 'react'

class Soundlets extends React.Component {

    render(){
        let soundlets = []

        for (let i = 0; i < 26; i++) {
            soundlets.push(<Soundlet />)
            }
        return (soundlets)
    }
}

class Soundlet extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            style: {
                height: '50px',
                width: '50px',
                backgroundColor: 'red'
            }
        }
    }
    
    componentDidMount() {
        // document.addEventListener('onkeydown', this.keyDownHandler)
        document.getElementById("body").addEventListener("keydown", this.keyDownHandler);
        document.getElementById("body").addEventListener("click", this.clickHandler);
        window.focus()
    }

    keyDownHandler = evt => {
        console.log("a key has been pressed")
        
        if(event.key == 'd'){
            console.log('it was "d"')
        }
       
        this.setState({
            style: {
                height: '50px',
                width: '50px',
                backgroundColor: 'green'
            }
        })
    }

    clickHandler = evt => {
        console.log("Body has been clicked")
    }

    render () {
        return(    
            <input onKeyDown={this.keyDownHandler} style={this.state.style} className="soundlet"></input>
        )
    }
}

export default Soundlets
