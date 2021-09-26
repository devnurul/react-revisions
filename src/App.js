import logo from './logo.svg';
import './App.css';
import { useState } from 'react/cjs/react.development';

function App() {
  const hero =[
    "Nurul", "Ayman", "Sadman"
  ]
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <Hero name = {hero[0]} age="59"></Hero>
      <Hero name = {hero[1]}></Hero>
      <Hero name = {hero[2]}></Hero>
    </div>
  );
}
function MovieCounter(props){

 const result = useState(0);
  return (
    <div>
      <button> Add movies</button>
      <h5>Number of movies :</h5>
    </div>
  )
}



function Hero(props){
  return(<div style ={{border:"2px solid #ddd", width:"350px", margin:"20px auto"}}>
    <h3 style= {{fontSize:"25px"}}>I am " {props.name}"</h3>
    <h3>I am {props.age || 5} year old</h3>
  </div>)
}

export default App;
