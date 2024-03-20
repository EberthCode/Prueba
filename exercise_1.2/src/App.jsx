const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
    <Header course={course} />
    <Part1 part1={part1} exercises1={exercises1} />
    <Part2 part2={part2} exercises2={exercises2}/>
    <Part3 part3={part3} exercises3={exercises3} />
    <Total Total={exercises1+exercises2+exercises3}/>
    </>
  )
}
const Part1 = (props) =>{
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
    </div> 
  )
}
const Part2 = (props) =>{
  return (
    <div>
      <p>
        {props.part2} {props.exercises2}
      </p>
    </div> 
  )
}
const Part3 = (props) =>{
  return (
    <div>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div> 
  )
}

const Header =(props)=>{
return(
  <div>
    <h1>
      {props.course}
    </h1>
  </div>
)
}

const Content =(props)=>{
  return(
    <div>
      <Part1/>
      <Part2/>
      <Part3/>
    </div>
  )
}

const Total =(props)=>{
  return(
    <div>
      <p>Number of exercises {props.Total}</p>
    </div>
  )
}
export default App