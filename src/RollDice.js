import React, { Component } from "react";
import Dice from './Dice'
import './RollDice.css'

export default class RollDice extends Component {
    static defaultProps = {
        sides: ["one","two","three","four","five","six"]
    }
    state = {dice1: "one", dice2: "two",dice3: "three", dice4: "four",dice5: "five", dice6: "six" , rolling:false}
    roll = () => {
        const newDice1 = this.props.sides[Math.floor(Math.random()* this.props.sides.length)]
        const newDice2 = this.props.sides[Math.floor(Math.random()* this.props.sides.length)]
        const newDice3 = this.props.sides[Math.floor(Math.random()* this.props.sides.length)]
        const newDice4 = this.props.sides[Math.floor(Math.random()* this.props.sides.length)]
        const newDice5 = this.props.sides[Math.floor(Math.random()* this.props.sides.length)]
        const newDice6 = this.props.sides[Math.floor(Math.random()* this.props.sides.length)]
        this.setState ({dice1:newDice1, dice2:newDice2,dice3:newDice3, dice4:newDice4,dice5:newDice5, dice6:newDice6,rolling:true})
        setTimeout(()=>{
            this.setState({rolling:false})
        },500)
    }   
  render() {
    return (
    <div className="RollDice">
        <div className="RollDice-container">
            <Dice face={this.state.dice1} rolling={this.state.rolling}/>
            <Dice face={this.state.dice2} rolling={this.state.rolling}/>
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>{this.state.rolling ? "Hoooop.." : "Zar At"}</button>
    </div>
    )
  }
}
