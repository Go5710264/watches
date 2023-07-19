import PropTypes from 'prop-types';
import Watch from "./Watch";

const WatchList = ({ timeZones, setNewZone }) => {

    const removeElement = (id) => {
        setNewZone((preTimeZones) => preTimeZones = preTimeZones.filter(item => item.id !== id))
    }
    
    return(
        <ul className="watch-list">
            {timeZones.map((zone) => (<Watch key={zone.id} infoZone={zone} removeElement={removeElement} />))}            
        </ul>
    )
}

WatchList.propTypes = {
    timeZones: PropTypes.array,
    setNewZone: PropTypes.func
}

export default WatchList;