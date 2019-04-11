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

    keyDownHandler = evt => {

        if(event.key == 'd' || 'Vinnie'){
            console.log('Fuck')
        }
        
        if(event.key == 'e'){
            console.log('you')
        }

        if(event.key == 's'){
            console.log('Vinnie')
        }

        this.setState({
            style: {
                height: '50px',
                width: '50px',
                backgroundColor: 'green'
            }
        })
      }

    render () {
        return(    
            <input onKeyDown={this.keyDownHandler} style={this.state.style} className="soundlet"></input>
        )
    }
}

export default Soundlets
