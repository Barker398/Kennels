import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { LocationContext } from "./LocationProvider"
import "./Locations.css"

export const LocationForm = () => {
    const { addLocation, getLocationById, updateLocation } = useContext(LocationContext)
    const { getLocations } = useContext(LocationContext)
    const [isLoading, setIsLoading] = useState(true);

    const [location, setLocation] = useState({
        name: "",
        address: ""
    });

    const { locationId } = useParams();
    const history = useHistory();

    useEffect(() => {
        getLocations().then(getLocations).then(() => {
            if (locationId) {
                getLocationById(location)
                    .then(location => {
                        setLocation(location)
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    const handleControlledInputChange = (event) => {
        const newLocation = { ...location }
        newLocation[event.target.id] = event.target.value
        setLocation(newLocation)
    }

    const handleSaveLocation = (event) => {

        const locationId = parseInt(location.locationId)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            if (locationId) {
                updateLocation({
                    id: location.id,
                    name: location.name,
                    address: location.address,
                    locationId: parseInt(location.locationId)
                })
                    .then(() => history.push(`/locations/detail/${location.id}`))
            } else {
                const newLocation = {
                    name: location.name,
                    address: location.address,
                    locationId: locationId
                }
                addLocation(newLocation)
                    .then(() => {
                        history.push("/locations")
                    })
            }
        }
    }

    return (
        <form className="locationForm">
            <h2 className="locationForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location name:</label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="location name" value={location.name} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Location address:</label>
                    <input type="text" id="address" required autoFocus className="form-control" placeholder="location address" value={location.address} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form and refreshing the page
                    handleSaveLocation()
                }}>
                {locationId ? <>Save Location</> : <>Add Location</>}
            </button>
        </form>
    )
}