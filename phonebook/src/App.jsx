/*Exercises 2.6 - 2.10*/
/*
import { useState } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import PersonsShow from "./components/Persons"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [newFilter, setFilter] = useState("")

  const handlenameChange = e => { setNewName(e.target.value) }
  const handlenumberChange = e => { setNewNumber(e.target.value) }
  const handlefilterChange = e => { setFilter(e.target.value) }

  //add a person
  const addperson = e => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat(newPerson))
    setNewName("")
    setNewNumber("")
  }

  //duplicate person
  const duplicateperson = persons.find(person => person.name === newName)
  const msg = `${newName} is already added to phonebook`
  if (duplicateperson) {
    alert(msg)
  }

  const newFilterUpper = newFilter.toUpperCase();
  const personToShow = newFilter.length === 0 ? persons : persons.filter(element => element.name.toUpperCase().includes(newFilterUpper))
  const Persons = () => {
    return (
      <div>
        {personToShow.map(element =>
          <PersonsShow key={element.id} persons={element} />
        )}
      </div>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter text="Filter shown with" newFilter={newFilter} handlefilterChange={handlefilterChange} />

      <h3>Add a new</h3>

      <PersonForm
        addperson={addperson} text2="add" newName={newName} newNumber={newNumber} handlenameChange={handlenameChange} handlenumberChange={handlenumberChange}
      />

      <h3>Numbers</h3>

      <Persons />
    </div>
  )
}

export default App
*/

/* Exercise #2.11*/
/*
import { useEffect, useState } from 'react';
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons")
    .then(response => 
        setPersons(response.data)
      )
  }, [])
    console.log(persons.length);
};

export default App;
*/

/*Exercises 2.12 - 2.15*/
/*
import React from 'react';
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonsShow from "./components/Persons";
import { useState, useEffect } from 'react';
import personService from "./services/personService";

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [newFilter, setFilter] = useState("")
  const newNameHandler = e => { setNewName(e.target.value) }
  const newNumberHandler = e => { setNewNumber(e.target.value) }
  const filterHandler = e => { setFilter(e.target.value) }

  //GET
  useEffect(() => {
    personService
      .getAll()
      .then(reponse => {
        console.log(reponse);
        setPersons(reponse)
      })
      .catch(error => {
        console.log("rejected", error);
      })
  }, [])

  //POST AND PUT
  const addperson = e => {
    e.preventDefault()
    const newObject = {
      name: newName,
      number: newNumber,
      id: `${persons.length + 1}`
    }
    const duplicateperson = persons.find(person => person.name === newName)
    const msg = `${newName} is already added to phonebook, replace the old number with a new one?`
    //PUT
    if(duplicateperson){
      if(window.confirm(msg)){
        personService
        .update(duplicateperson.id, newObject)
        .then(response => {
          setPersons(persons.map(e => e.id !== duplicateperson.id
            ? e
            : response
            ))
          setNewName("")
          setNewNumber("")
        })
      }
      else{
        personService
        .create(newObject)
        .then(response => {
          setPersons(persons.concat(response))
          setNewName("")
          setNewNumber("")
        })
      }
    }
        else{
      //POST
      personService
      .create(newObject)
      .then(response => {
        setPersons(persons.concat(response))
        setNewName("")
        setNewNumber("")
      }}
    }
  }

  //DELETE
  const deletePersonOf = id => {
    personService
      .htppDelete(id)
      .then(response => {
        setPersons(persons.filter(e => e.id !== id))
      })
      .catch(error => {
        alert("This contact was already deleted from phonebook.")
      })
  }

  const newFilterUpper = newFilter.toUpperCase()
  const personToShow = newFilter.length === 0
    ? persons
    : persons.filter(element => element.name.toUpperCase().includes(newFilterUpper))
  const Persons = () => {
    return (
      <div>
        {personToShow.map(element =>
          <PersonsShow
            key={element.id}
            persons={element}
            text="delete"
            deletePerson={() => {
              if (window.confirm(`Delete ${element.name} ?`)) {
                deletePersonOf(element.id)
              }
              else {
                console.log("Ok.");
              }
            }}
          />
        )}
      </div>
    )
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter text="Filter shown with" newFilter={newFilter} filterHandler={filterHandler} />
      <PersonForm
        addperson={addperson} text2="add" newName={newName} newNumber={newNumber}
        handlenameChange={newNameHandler} handlenumberChange={newNumberHandler} />
      <h3>Numbers</h3>
      <Persons />
    </div>
  );
};
*/
/* Exercise 2.16 - 2.17*/
import React from 'react';
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonsShow from "./components/Persons";
import { useState, useEffect } from 'react';
import personService from "./services/personService";
import Notification from './components/Notification';
import "./index.css"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [newFilter, setFilter] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  const newNameHandler = e => { setNewName(e.target.value) }
  const newNumberHandler = e => { setNewNumber(e.target.value) }
  const filterHandler = e => { setFilter(e.target.value) }
  console.log(errorMessage);

  //GET
  useEffect(() => {
    personService
      .getAll()
      .then(reponse => {
        console.log(reponse);
        setPersons(reponse)
      })
      .catch(error => {
        console.log("rejected", error);
      })
  }, [])

  //POST AND PUT
  const addperson = e => {
    e.preventDefault()
    const newObject = {
      name: newName,
      number: newNumber,
      id: `${persons.length + 1}`
    }
    const duplicateperson = persons.find(person => person.name === newName)
    const msg = `${newName} is already added to phonebook, replace the old number with a new one?`
    //PUT
    if(duplicateperson){
      if(window.confirm(msg) === true){
        personService
        .update(duplicateperson.id, newObject)
        .then(response => {
          setErrorMessage(
            `The number of ${response.name} has been changed`
          )

          setTimeout(() => {
            setErrorMessage(null)
          }, 5000);
          setPersons(persons.map(e => e.id !== duplicateperson.id
            ? e
            : response
            ))
          setNewName("")
          setNewNumber("")
        })
      }
      else{
        //POST
        personService
        .create(newObject)
        .then(response => {
          setErrorMessage(<div className='error'>{`Added ${response.name}`}</div>)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000);
          setPersons(persons.concat(response))
          setNewName("")
          setNewNumber("")
        })
      }
    }else{
      //POST
      personService
      .create(newObject)
      .then(response => {
        setErrorMessage(<div className='error'>{`Added ${response.name}`}</div>)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000);
        setPersons(persons.concat(response))
        setNewName("")
        setNewNumber("")
      })
    }
  }

  //DELETE
  const deletePersonOf = id => {
    const person = persons.find(e => e.id === id)
    personService
      .htppDelete(id)
      .then(response => {
        setPersons(persons.filter(e => e.id !== id))
      })
      .catch(error => {
        console.log(error);
        setErrorMessage(<div className='error2'>{`Information of ${person.name} has already been removed from server`}</div>)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000);
      })
  }

  const newFilterUpper = newFilter.toUpperCase()
  const personToShow = newFilter.length === 0
    ? persons
    : persons.filter(element => element.name.toUpperCase().includes(newFilterUpper))
  const Persons = () => {
    return (
      <div>
        {personToShow.map(element =>
          <PersonsShow
            key={element.id}
            persons={element}
            text="delete"
            deletePerson={() => {
              if (window.confirm(`Delete ${element.name} ?`)) {
                deletePersonOf(element.id)
              }
              else {
                console.log("Ok.");
              }
            }}
          />
        )}
      </div>
    )
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage}/>
      <Filter text="Filter shown with" newFilter={newFilter} filterHandler={filterHandler} />
      <PersonForm
        addperson={addperson} text2="add" newName={newName} newNumber={newNumber}
        handlenameChange={newNameHandler} handlenumberChange={newNumberHandler} />
      <h3>Numbers</h3>
      <Persons />
    </div>
  );
};

export default App;