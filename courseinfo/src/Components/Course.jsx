/* 2.1-2.3
import React from 'react';

const Course = ( property ) => {
    return (
        <div>
            <Header key={property.id} name={property.course.name} />
            <Content  parts={property.course.parts} />
            <Total parts={property.course.parts}/>
        </div>
    )
    
};

const Header = ( property ) => {
    return(
        <div>
            <h1>{property.name}</h1>
        </div>
    )
}

const Content = ( property ) => {
    console.log(property);
    const different = property.parts.map(part => {return <Parts key={part.id} parts={part}/>})

    return(
        <div>{different}</div>
    )
}

const Parts = ( property ) => {
    console.log(property);
    return(
        <div>
            <p>{property.parts.name}: {property.parts.exercises}</p>
        </div>
    )
}

const Total = ( property ) => {
    console.log(property);
    const totalamount = property.parts.reduce((sum, amount) => {
        return sum + amount.exercises
    }, 0)

    return(
        <div>
            total of {totalamount} exercises
        </div>
    )
}

export default Course;
*/
/*2.4-2.5*/
import React from 'react';
import "./index.css";

const Courses = ({ courses }) => {
    return (
        <div>
            <h1>Web development curriculum</h1>
            {courses.map(course =>
                <div key={course.id}>
                    <Header header={course.name} />
                    <Content contents={course.parts}/>
                    <Total exercises={course.parts}/>
                </div>
            )}
        </div>
    )
};

const Header = ({ header }) => {
    console.log(header);
    return (
        <div>
            <h2>{header}</h2>
        </div>
    )
}

const Content = ({ contents }) => {
    console.log(contents);
    return(
        <div>
            {contents.map(part => 
                <Parts key={part.id} name={part.name} exercises={part.exercises}/>
                )}
        </div>
    )
}

const Parts = ({name, exercises}) => {
    console.log(name, exercises);
    return(
        <div>
            {name}: {exercises}
        </div>
    )
}

const Total = ({exercises}) => {
    console.log(exercises);
    return (
        <div>
            <p className='Total'>Total of {exercises.reduce((sum, amount) => {return sum + amount.exercises}, 0)} exercises</p>
        </div>
    )
}

export default Courses;
