import Watch from "./Watch";

const WatchList = ({ timeZones }) => {
    
    return(
        <ul className="watch-list">
            {timeZones.map((zone) => (<Watch key={zone.id} infoZone={zone} />))}            
        </ul>
    )
}

export default WatchList;