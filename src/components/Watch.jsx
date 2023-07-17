import moment from "moment";
import { useEffect, useState } from "react";

const Watch = ({ infoZone }) => {

    // const desiredTimeZone = 
    //     moment.utc()
    //         .clone()
    //         .add(infoZone.zone, 'hours') // moment().zone()...

    const [desiredTimeZone, setDesiredTimeZone] = useState(moment.utc().clone().add(infoZone.zone, 'hours'))

    console.log(desiredTimeZone)
    useEffect(() => {
        let idInterval = setInterval(() => Number(desiredTimeZone.format('X')) + 1, 1000)

        return () => {
            clearInterval(idInterval)
        }
    }, [desiredTimeZone])

    
    // console.log(desiredTimeZone.format('X'))

    // const hours = desiredTimeZone.format('H'),
    //     minutes = desiredTimeZone.format('m'),
    //     seconds = desiredTimeZone.format('s');

    return (
        <li>
            <section>
                <h3>{infoZone.name}</h3>
                {/* <time>{desiredTimeZone.format('HH:mm:ss')}</time> */}
                <time>{desiredTimeZone.format('HH:mm:ss')}</time>
            </section>
        </li>
    )
}

export default Watch;