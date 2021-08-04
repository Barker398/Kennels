import React from "react"
import { Animal } from "./animal/Animals"
import "./Kennel.css"
import { Employees } from "./Employees"
import { Locations } from "./Locations"
import { Customers } from "./Customers"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"


export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalProvider>
                <AnimalList />
            </AnimalProvider>
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <Employees />
            <Employees />
            <Employees />
        </article>

        <h2>Locations</h2>
        <article className="locations">
            <Locations />
            <Locations />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <Customers />
            <Customers />
            <Customers />
            <Customers />
        </article>
    </>
)
