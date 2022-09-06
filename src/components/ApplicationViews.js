import React from "react"
import { Route } from "react-router-dom"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CustomerList.js"
import { CustomerProvider } from "./customer/CustomerProvider.js"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { AnimalForm } from "./animal/AnimalForm"
import { EmployeeForm } from "./employee/EmployeeForm"
import { LocationForm } from "./location/LocationForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { LocationDetail } from "./location/LocationDetail"
import { AnimalSearch } from "./animal/AnimalSearch"
import { Home } from "./home/Home"

export const ApplicationViews = () => {
    return (
        <>
            <LocationProvider>
                <AnimalProvider>
                    <CustomerProvider>
                        <EmployeeProvider>
                            <Route path="/home">
                                <Home />
                            </Route>
                            <Route exact path="/locations">
                                <LocationList />
                            </Route>
                            <Route path="/locations/detail/:locationId(\d+)">
                                <LocationDetail />
                            </Route>
                            <Route path="/locations/create">
                                <LocationForm />
                            </Route>
                            <Route path="/locations/edit/:locationId(\d+)">
                                <LocationForm />
                            </Route>
                            <Route exact path="/animals">
                                <AnimalSearch />
                                <AnimalList />
                            </Route>
                            <Route path="/animals/detail/:animalId(\d+)">
                                <AnimalDetail />
                            </Route>
                            <Route path="/animals/edit/:animalId(\d+)">
                                <AnimalForm />
                            </Route>
                            <Route path="/animals/create">
                                <AnimalForm />
                            </Route>
                            <Route path="/customers">
                                <CustomerList />
                            </Route>
                            <Route exact path="/employees">
                                <EmployeeList />
                            </Route>
                            <Route path="/employees/detail/:employeeId(\d+)">
                                <EmployeeDetail />
                            </Route>
                            <Route path="/employees/create">
                                <EmployeeForm />
                            </Route>
                        </EmployeeProvider>
                    </CustomerProvider>
                </AnimalProvider>
            </LocationProvider>
        </>
    )
}

//  {/* Render the location list when http://localhost:3000/ */}
//  <LocationProvider>
//  <Route exact path="/">
//      <LocationList />
//  </Route>
// </LocationProvider>

// {/* Create the new route that will respond when the button click changes the URL to /animals/create. */}
// <AnimalProvider>
//  <Route exact path="/animals">
//  <AnimalSearch />
// <AnimalList />
//  </Route>

//  <CustomerProvider>
//      <LocationProvider>
//      <Route path="/animals/create">
// <AnimalForm />
//      </Route>
//      <Route path="/animals/detail/:animalId(\d+)">
//          {/*(\d+) is regex to match only a digit. The
//           `:animalId` must be a interger.*/}
//           <AnimalDetail />
//      </Route>
//      <Route path="/animals/edit/:animalId(\d+)">
//          <AnimalForm />
//      </Route>
//      </LocationProvider>
//  </CustomerProvider>

// </AnimalProvider>

// <LocationProvider>
//  <Route exact path="/locations">
//      <LocationList />
//  </Route>
//  <Route exact path="/locations/create">
//      <LocationForm />
//  </Route>
//  <Route path="/locations/detail/:locationId(\d+)">
//          {/*(\d+) is regex to match only a digit. The
//           `:animalId` must be a interger.*/}
//           <LocationDetail />
//      </Route>
//      <Route path="/locations/edit/:locationId(\d+)">
//          <LocationForm />
//      </Route>
// </LocationProvider>

// {/* Render the animal list when http://localhost:3000/customers */}
// <CustomerProvider>
//  <Route path="/customers">
//      <CustomerList />
//  </Route>
// </CustomerProvider>

// <EmployeeProvider>
// <LocationProvider>
//  <Route exact path="/employees">
//      <EmployeeList />
//  </Route>

//  <Route exact path="/employees/create">
//      <EmployeeForm />
//      </Route>
//      <Route path="/employees/detail/:employeeId(\d+)">
//          {/*(\d+) is regex to match only a digit. The
//           `:employeeId` must be a interger.*/}
//           <EmployeeDetail />
//  </Route>
//  <Route path="/employees/edit/:employeeId(\d+)">
//          <LocationForm />
//      </Route>
//  </LocationProvider>
// </EmployeeProvider>