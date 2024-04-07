/* Exercises 2.6 - 2.11 */
/*
import React from "react"

const PersonsShow = ({ persons }) => {
  return (
    <div>
      {persons.name} {persons.number}
    </div>
  )
}

export default PersonsShow;
*/
import React from 'react';

const PersonsShow = ({persons, text, deletePerson}) => {
  return (
    <div>
      {persons.name} {persons.number} <button onClick={deletePerson}>{text}</button>
    </div>
  );
};

export default PersonsShow;