import Watch from "./Watch";

const WatchList = ({ timeZones }) => {
    console.log(timeZones)
    
    return(
        <ul>
            {timeZones.map((zone) => (<Watch key={zone.id} infoZone={zone} />))}            
        </ul>
    )
}

export default WatchList;