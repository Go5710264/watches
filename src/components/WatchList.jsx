import PropTypes from 'prop-types';
import Watch from "./Watch";

const WatchList = ({ timeZones }) => {
    
    return(
        <ul className="watch-list">
            {timeZones.map((zone) => (<Watch key={zone.id} infoZone={zone} />))}            
        </ul>
    )
}

WatchList.propTypes = {
    timeZones: PropTypes.array
}

export default WatchList;