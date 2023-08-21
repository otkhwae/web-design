import {Component} from 'react'

// class Welcome extends Component {
//     render() {
//         return <h1>hi from welcome class component</h1>
//     }
// } 

class Welcome extends Component {
    render () {
        return <h1> welkome {this.props.name} your position 
        is {this.props.position}</h1>
    }
}

export default Welcome