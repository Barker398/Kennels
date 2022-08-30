import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Locations.css"
import { useHistory, useParams } from "react-router-dom"

export const LocationDetail = () => {
    const { locations } = useContext(LocationContext)
    const [location, setLocation] = useState({ location: {}, employee: {}, animals: [] })

    /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */
    const { locationId } = useParams();

    const history = useHistory()

    useEffect(() => {
        const thisLocation = locations.find(l => l.id === parseInt(locationId)) || { location: {}, employee: {}, animals: [] }

        setLocation(thisLocation)
    }, [locationId])

    return (
        <>
            <button onClick={() => {
                history.push(`/locations/edit/${location.id}`)
            }}>Edit Location</button>
            <section className="location">
                <h3 className="location__name">{location.name}</h3>
                <div className="location__address">{location.address}</div>
                <div className="animal__name">{location.animals.length}</div>
            </section>
        </>
    )
}
