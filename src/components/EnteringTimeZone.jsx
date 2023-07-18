import { v4 as uuidv4 } from 'uuid'
import { useState } from "react"

const EnteringTimeZone = ({ addNewZone }) => {
    const [zone, setZone] = useState();

    const changeTimeZone = (event) => {
        setZone({...zone, zone: +event.target.value})
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
                        className="header-name-zone"
                    >Название</label>

                    <input 
                        className="input-name-zone"
                        type="text"
                        onChange={() => changeNameZone(event)} 
                        placeholder='Лондон'
                    />

                </div>

                <div className="form-data">
                    
                    <label 
                        className="header-time-zone"
                    >Временная зона</label>

                    <input 
                        className='input-time-zone' 
                        type="text" 
                        onChange={() => changeTimeZone(event)}
                        placeholder='+1'
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