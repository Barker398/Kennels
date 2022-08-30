import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employees.css"
import { useHistory, Link } from 'react-router-dom'

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    const history = useHistory()

    useEffect(() => {
        console.log("EmployeeList: useEffect - getEmployees")
        getEmployees()
    }, [])

    return (
        <>
            <h2>Employees</h2>
            <button onClick={
                () => history.push("/employees/create")
            }>
                New Employee
            </button>

        <section className="employees">
            {
                employees.map(employee => {
                    return (
                        <div className="employee">
                        <Link to={`/employees/detail/${employee.id}`} key={employee.id}>
                          {employee.name}
                        </Link>
                        </div> 
                    )
                })
            }
        </section>
        </>
    )
}
