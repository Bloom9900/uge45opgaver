import React from 'react';
import { persons } from "./file2";


export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

export function MultiWelcome() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edith" />
            <WelcomePerson person={persons[0]} />
            {persons.map((person, index) => <li key={index}> <WelcomePerson person= {person}/></li>)}
        </div>
    );
}

function WelcomePerson(props) {
    const { firstName, lastName, email } = props.person;
    return (
        <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
        </div>
    )
}