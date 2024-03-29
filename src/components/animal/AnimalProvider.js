//This code imports the main React library, and the two functions that it exports.
//We will useState to hold and set the array of animals.
import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const AnimalContext = createContext()

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
    const [animals, setAnimals] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=customer&_expand=location&_sort=location.id")
            .then(res => res.json())
            .then(setAnimals)
    }

    const getAnimalById = (animalId) => {
        return fetch(`http://localhost:8088/animals?id=${animalId}`)
        .then(res => res.json())
        
    }

    const addAnimal = animalObj => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
        .then(getAnimals)
    }

    const releaseAnimal = animalId => {
        return fetch(`http://localhost:8088/animals/${animalId}`, {
        method: "DELETE"
    })
        .then(getAnimals)
}

const updateAnimal = animal => {
    return fetch(`http://localhost:8088/animals/${animal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(animal)
    })
      .then(getAnimals)
  }
  
    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal, releaseAnimal,
            updateAnimal, getAnimalById, searchTerms, setSearchTerms
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}
