import React, { useState } from "react";
import PhoneBook from "./component/PhoneBook";
import axios from "axios";

function App() {
  const [persons, setPersons] = useState([{}]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    setNewName(personObject.name);
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  return (
    <div className="App">
      <h1>Phone Book</h1>
      <h1>Add a new</h1>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      {/*  Show The Phone Book*/}
      <h1>Numbers</h1>
      <PhoneBook persons={persons} />
    </div>
  );
}

export default App;
