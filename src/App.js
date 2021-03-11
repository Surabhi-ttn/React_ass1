import { Component } from 'react';
import './App.css';

class App extends Component {

  counter= 0;
  state = {
    item: "",
    fruits: [],
  }

  handleOnChange = (e) => {
    let str = e.target.value
    this.setState(
      {
        ...this.state,
        item :str
      }
    )
  }

  handleOnClick = () => {
    let fruit= this.state.item.split('-')[0]
    let quantity= this.state.item.split('-')[1]
    this.setState(
      {
        ...this.state,
        fruits: [...this.state.fruits,{'fruit':fruit, 'qty':quantity, 'id':this.counter}]
      }
    )
    this.counter++;
  }

  handleOnDelete = (e) => {
    //console.log("hello", e.target.id,typeof e.target.id)
    let id= parseInt(e.target.id)
    //console.log(id ,typeof id)
    let buffer =  this.state.fruits
    buffer = buffer.filter(fruit => fruit.id!=id)
    console.log(buffer)
    this.setState(
      {
        ...this.state,
        fruits : buffer
      }
    )
    
  }

  render(){
  return (
    <div className="App">
      <input type="text" onChange={this.handleOnChange}></input>
      <button onClick={this.handleOnClick}>Submit</button>
      <ul>
        {
          this.state.fruits.map(fruit =>
              <li>
                <span>{fruit.fruit}</span>
                <span>{fruit.qty}</span>
                <button id={fruit.id} onClick={this.handleOnDelete}>Delete</button>
              </li>
            )
        }
      </ul>
    </div>
  );
}
}
export default App;
