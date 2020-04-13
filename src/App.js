import React,{Component} from 'react';

class App extends Component{
  render(){
    var myStyle = {
      fontSize: 100,
      color: 'ff0000'
    }
    return(
      <div>
        <h1 style={myStyle}>App Component</h1>
        <h2>{50*50}</h2>
      </div>
    )
  }
}
export default App;

