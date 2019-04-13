import React from 'react'
import Pixel from './Pixel'

export default class Pixels extends React.Component{


    render(){
        let howManyPixels = []
        
        for (var i = 0; i < 1000; i++) {
            howManyPixels.push(<Pixel key={i} />)
        }
        return howManyPixels
    }
}

