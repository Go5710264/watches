import moment from "moment";
import { useEffect, useState } from "react";
import close from '../../public/close.svg'
import PropTypes from 'prop-types';

const Watch = ({ infoZone, removeElement }) => {

    let [desiredTimeZone, setDesiredTimeZone] = useState(
        Number(moment.utc().clone().add(infoZone.zone, 'hours').format('X'))
    )

    useEffect(() => {
        let idInterval = setInterval(() => {
            setDesiredTimeZone(++desiredTimeZone);
        }, 1000)

        return () => {
            clearInterval(idInterval)
        }
    })

// Временная зона отсчитывается от текущего времени

    return (
        <li className="cell-with-time">
            <section className="time-info">
                <div>
                    <h3 className="time-name">{infoZone.name}</h3>
                    <time>{moment.unix(desiredTimeZone).format('HH:mm:ss')}</time>
                </div>
                <img 
                    src={close}
                    className="icon"
                    onClick={() => removeElement(infoZone.id)}
                />
            </section>
        </li>
    )
}

Watch.propTypes = {
    infoZone: PropTypes.object,
    removeElement: PropTypes.func
}

export default Watch;