import React, { Component } from "react";

const PhoneBook = ({ persons }) => {
  return (
    <div>
      {persons.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default PhoneBook;
