import React from "react"
import "./Kennel.css"
import { EmployeeList } from "./EmployeeList"
import { EmployeeProvider } from "./EmployeeProvider"
import { LocationProvider } from "./LocationProvider"
import { LocationList } from "./LocationList"
import { CustomerList } from "./CustomerList"
import { CustomerProvider } from "./CustomerProvider"
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
            <EmployeeProvider>
                <EmployeeList />
            </EmployeeProvider>
        </article>

        <h2>Locations</h2>
        <article className="locations">
            <LocationProvider>
                <LocationList />
            </LocationProvider>
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <CustomerProvider>
                <CustomerList />
            </CustomerProvider>
        </article>
    </>
)
