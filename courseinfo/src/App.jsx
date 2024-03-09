/* 2.1 - 2.3
import Course from "./Components/Course"

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
*/
/* 2.4-2.5*/
import React from "react";
import Courses from "./Components/Courses"

const App = ({courses}) => {
  return (
    <div>
      <Courses courses={courses} />
    </div>
  )
}

export default App;
