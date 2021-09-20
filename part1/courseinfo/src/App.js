import React from 'react'

const Header = (props) => {
  return (
    <div>
      <p>
      <h1>{props.course}</h1>
      </p>
    </div>
  )
}
const Part = (props) => {
  return (
    <p>{props.part} {props.exe}</p>
  )
}
const Content = (props) => {
  return (
    <div> 
      <Part part={props.p1} exe={props.exe1}/>
      <Part part={props.p2} exe={props.exe2}/>
      <Part part={props.p3} exe={props.exe3}/>
    </div>
  )
}

const Total = (props) => {
  return (
   <p>Number of exercises {props.exe1 + props.exe2 + props.exe3}</p>
  )
}

const App = () => {
  //const definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
    
  return (
    <div>
     <Header course={course}/>
     <Content exe1={exercises1} exe2={exercises2} exe3={exercises3} p1={part1} p2={part2} p3={part3}/>
     <Total exe1={exercises1} exe2={exercises2} exe3={exercises3} />
    </div>
  )
}

export default App