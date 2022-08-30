import React, { useContext, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import { LocationContext } from "./LocationProvider"
import "./Locations.css"


export const LocationList = () => {
    const { locations, getLocations, removeLocation } = useContext(LocationContext)

    const history = useHistory()

    useEffect(() => {
        console.log("LocationList: useEffect - getLocations")
        getLocations()
    }, [])

    const handleDelete = (locationId) => {
       removeLocation(locationId)
       .then(() => {
        history.push("/locations")
       }) 
    }

    return (
        <>
            <h2>Locations</h2>
            <button onClick={
                () => history.push("/locations/create")
            }>
                Add Location
            </button>

            <section className="locations">
                {
                    locations.map(location => {
                        return (
                            <div className="location" key={location.id}>

                                <section className="location">
                                    <h3 className="location__name"> <Link to={`/locations/detail/${location.id}`}>
                                        {location.name}
                                    </Link></h3>
                                    <div className="location__address">{location.address}</div>
                                    <div className="location__totAnimal">{location.animals.length} Animals</div>
                                    <div className="location__totEmployee">{location.employees.length} Employees</div>
                                </section>
                                <button className="delete" onClick={
                                    () => handleDelete(location.id)
                                }>Remove Location</button>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}