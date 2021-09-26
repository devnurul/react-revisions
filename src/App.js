import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [heroes, setHero] = useState([])

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setHero(data))
  }, [])

  // const heroes =[
  //  {name :"Nurul", age:'29'},
  //  {name :"Sadman", age:'5'},
  //  {name :"Ayman", age:'3'},
  //  {name :"Noor Maa", age:'1'},
  // ]

  
  return (
    <div className="App">
      {
        heroes.map( hero =><Hero name = {hero.name} key ={ hero.id}></Hero>)
      }

      <MovieCounter></MovieCounter>
      {/* <Hero name = {heroes[0]} age="59"></Hero>
      <Hero name = {heroes[1]}></Hero>
      <Hero name = {heroes[2]}></Hero> */}
    </div>
  );
}
function MovieCounter(props){
   const [count, setCount] = useState(0);
   
   const handleClick = () => setCount(count + 1)
   return (
    <div>
      <button onClick={handleClick}> Add movies</button>
      <h3>Number of movies: {count}</h3>
      <MovieDisplay movieses ={count + 30}></MovieDisplay>
      <MovieDisplay movieses ={count + 10}></MovieDisplay>
    </div>
  )
}
function MovieDisplay(props){
  return(
    <h3>Movies counter: {props.movieses} </h3>
  )
}

function Hero(props){
  return(<div style ={{border:"2px solid #ddd", width:"350px", margin:"20px auto"}}>
    <h3 style= {{fontSize:"25px"}}>I am " {props.name}"</h3>
    <h3>I am {props.age || 5} year old</h3>
  </div>)
}

export default App;
echo "# react-revisions" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/devnurul/react-revisions.git
git push -u origin main