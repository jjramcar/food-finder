import LocationsListItem from "components/locations-list-item";
import styles from "./index.module.css"; 
import { LocationType } from "@/mongoose/locations/schema"; 

interface PropsInterface { 
    locations: LocationType[];
}

const LocationsList = (props: PropsInterface): JSX.Element => { 
    return (
        <ul className = {styles.root}>
            { props.locations.map((location) => {
                return ( 
                    typeof location.location_id === 'string' || typeof location.location_id === 'number' ? (
                    <LocationsListItem 
                        location={location}
                        key = {location.location_id}
                       />
                    ):null
                ); 
            })}
        </ul>
    );
}

export default LocationsList;