import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employees.css"
import { useHistory, useParams } from "react-router-dom"

export const EmployeeDetail = (props) => {
    const { employees } = useContext(EmployeeContext)
    const [employee, setEmployee] = useState({ location: {} })

    /*
        Given the example URL above, this will store the value
        of 5 in the employeeId variable
    */
    const { employeeId } = useParams();

    const history = useHistory()

    useEffect(() => {
        if (props.employee) {
            setEmployee(props.employee)
        } else {
            const thisEmployee = employees.find(e => e.id === parseInt(employeeId)) || { location: {} }
            setEmployee(thisEmployee)
        }
    }, [employeeId])

    // useEffect(() => {
    //     const thisEmployee = employees.find(e => e.id === parseInt(employeeId)) || { employee: {}, location: {} }
    //     setEmployee(thisEmployee)
    // }, [employeeId])

    return (
        <>
        <button onClick={() => {
            history.push(`/employees/edit/${employee.name}`)
        }}>Edit Employees</button>
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__location">Location: {employee.location.name}
            </div>
        </section>
        </>
    )
}
