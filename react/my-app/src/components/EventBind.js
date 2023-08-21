import React, { Component } from 'react'

class EventBind extends Component {
    constructor (){
        super()
        this.state = {
            message: 'old message'
        }
        //this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: 'aproach 1,2 & 3'
    //     })
    // }
    clickHandler = () => {
        this.setState({
            message: 'approach 4'
        })
    }


  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* first approach of binding */}
        {/* <button onClick= {this.clickHandler.bind(this)}>click</button> */} 
        {/* 2nd approach of binding */}
        {/* <button onClick= {() => {this.clickHandler()}}> click</button> */}
        {/* 3rd & 4th approach of binding */}
        <button onClick= {this.clickHandler}>click</button>
      </div>
    )
  }
}

export default EventBind
