import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "../employee/EmployeeProvider"
import "./Employees.css"
import { useHistory, useParams } from 'react-router-dom';

export const EmployeeForm = () => {
  const { addEmployee, getEmployeeById, updateEmployee } = useContext(EmployeeContext)
  const [isLoading, setIsLoading] = useState(true);
  const { locations, getLocations } = useContext(LocationContext)
  const {employees, getEmployees } = useContext(EmployeeContext)

  /*
  With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

  Define the intial state of the form inputs with useState()
  */

  const [employee, setEmployee] = useState({
    name: "",
    locationId: 0

  });

  const { employeeId } = useParams();
  const history = useHistory();


  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newEmployee = { ...employee }
    /* Animal is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newEmployee[event.target.id] = event.target.value
    // update state
    setEmployee(newEmployee)
  }

  const handleSaveEmployee = (event) => {

    const locationId = parseInt(employee.locationId)
    const employeeId = parseInt(employee.employeeId)

    if (locationId === 0 || employeeId === 0) {
      window.alert("Please select a location and a employee")
    } else {

      if (employeeId) {
        updateEmployee({
          id: employee.id,
          name: employee.name,
          locationId: parseInt(employee.locationId)
        })
          .then(() => history.push(`/employees/detail/${employee.id}`))
      } else {
        const newEmployee = {
          name: employee.name,
          locationId: locationId,
        }
        addEmployee(newEmployee)
          .then(() => {
            history.push("/employees")
          })
      }
    }
  }

  useEffect(() => {
    getEmployees().then(getLocations).then(() => {
      if (employeeId) {
        getEmployeeById(employeeId)
          .then(employee => {
            setEmployee(employee)
            setIsLoading(false)
          })
      } else {
        setIsLoading(false)
      }
    })
  }, [])
  
    return (
      <form className="employeeForm">
        <h2 className="employeeForm__title">New Employee</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Employee name:</label>
            <input type="text" id="name" required autoFocus className="form-control" placeholder="Employee name" value={employee.name} onChange={handleControlledInputChange} />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Assign to location: </label>
            <select name="locationId" id="locationId" className="form-control" value={employee.locationId} onChange={handleControlledInputChange}>
              <option value="0">Select a location</option>
              {locations.map(l => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>

        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault()
            handleSaveEmployee()
          }}>
          {employeeId ? <>Save Employee</> : <>Add Employee</>}
        </button>
      </form>
    )
  
}