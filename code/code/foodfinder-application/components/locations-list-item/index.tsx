import Link from "next/link";
import styles from "./index.module.css"; 
import { LocationType } from "mongoose/locations/schema"; 

interface PropsInterface { 
    location: LocationType;
} 

const LocationsListItem = (props: PropsInterface): JSX.Element => { 
    const location = props.location;
    return ( 
        <>
           {location && typeof location.name === 'string' && typeof location.cuisine === 'string' && 
           typeof location.borough === 'string' &&
           ( 
               <li className={styles.root}>
                   <Link href={`/location/${location.location_id}`}>
                       <h2>
                          {location.name}
                          <small className={styles.details}>
                            {location.cuisine} in  {location.borough}
                          </small>
                       </h2>
                    </Link>               
                </li>
           )}
        </>
    );
};

export default LocationsListItem;