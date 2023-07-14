import { v4 as uuidv4 } from 'uuid'
import { useState } from "react"

const EnteringTimeZone = ({ addNewZone }) => {
    const [zone, setZone] = useState();

    const changeTimeZone = (event) => {
        setZone({...zone, zone: event.target.value})
    }

    const changeNameZone = (event) => {
        setZone({...zone, name: event.target.value})
    }

    const subForm = (event) => {
        event.preventDefault();

        addNewZone(event, {
            id: uuidv4(),
            ...zone
        })    
    }

    return (
        <div>
            <form 
                className="form-time-zone"
                onSubmit={() => subForm(event)}
            >

                <div className="form-data">
                    
                    <label 
                        // htmlFor="input-name-zone" 
                        className="header-name-zone"
                    >Название</label>

                    <input 
                        // id="input-name-zone"
                        className="input-name-zone"
                        type="text"
                        onChange={() => changeNameZone(event)} 
                        placeholder='Лондон'
                        // name="input-name-zone" 
                    />

                </div>

                <div className="form-data">
                    
                    <label 
                        // htmlFor="distance" 
                        className="header-time-zone"
                    >Временная зона</label>

                    <input 
                        className='input-time-zone' 
                        type="text" 
                        onChange={() => changeTimeZone(event)}
                        placeholder='+1'
                        // name="distance" 
                    />

                </div>

                <button 
                    className="form-time-zone-botton"
                >Добавить</button>

            </form>
        </div>
    )
}

export default EnteringTimeZone;