import {Component} from 'react'

class Message extends Component {
    constructor () {
        super()
        this.state = {
            message: 'welcome visitor'
        }
    }
    changeMessage(){
        this.setState({
            message: 'hooray you clicked'
        })
    }

    render () {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick= {() => this.changeMessage()}>click here</button>
            </div>
        )
    }
}

export default Message