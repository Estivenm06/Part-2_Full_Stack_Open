/* eslint-disable react/prop-types */

const PersonsShow = ({person, deletePerson}) => {
  return (
    <div>
      {person.name} {person.number} <button onClick={() => {if(window.confirm(`Delete ${person.name} ?`)){deletePerson(person.id)}}}>delete</button>
    </div>
  );
};

export default PersonsShow;
