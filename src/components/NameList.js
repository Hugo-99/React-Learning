import React from 'react';
import Person from './Person';

function NameList(props) {
    // const names = ['Hugo', 'Caesor', 'Ausgust']
    // const nameList = names.map(name=><h2>{name}</h2>)
    const persons = [
        {
            id: 1,
            name: 'Hugo',
            age: 21,
            skill: 'Code'
        },
        {
            id: 2,
            name: 'Caesor',
            age: 1000,
            skill: 'lol'
        },
        {
            id: 3,
            name: 'Ausgust',
            age: 1000,
            skill: 'the meaning of my name'
        }
    ]
    const personList = persons.map(person => <Person person = {person} />)
    return (
    <div>{personList}</div>
    );
}

export default NameList;