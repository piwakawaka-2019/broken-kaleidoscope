import React from 'react'

let idArray = [
    "A",
    "B",
    "C"
]

class Soundlets extends React.Component {

    render(){
        let soundlets = []

        for (let i = 0; i < 3; i++) {
            soundlets.push(<Soundlet id={idArray[i]} />)
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
        console.log(event.key)
        
        if(event.key == 'a'){
            render (
                <p>hello</p>
            )           
        } else {
            this.setState({
                style: {
                    height: '50px',
                    width: '50px',
                    backgroundColor: 'green'
                }
            })
        }
    }


    render () {
        return(    
            <input onKeyDown={this.keyDownHandler} style={this.state.style} className="soundlet" id={this.props.id}></input>
        )
    }
}

export default Soundlets
