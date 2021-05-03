import React, { createContext, useContext, useEffect, useState } from 'react'

interface ILocationProvider {
    location: string;
    listenLocation: (loc: string) => void;
}

const LocationContext = createContext({} as ILocationProvider)

const LocationProvider: React.FC = ({ children }) => {
    const [location, setLocation] = useState<string>('location')

    const listenLocation = (loc: string) => setLocation(loc)

    return (
        <LocationContext.Provider
            value={{
                location,
                listenLocation,
            }}
        >
            {children}
        </LocationContext.Provider>)
}

export default LocationProvider

export const useLocationRef = () => useContext(LocationContext)