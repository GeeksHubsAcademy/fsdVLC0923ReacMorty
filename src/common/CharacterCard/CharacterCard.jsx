
import React, { useState } from 'react';
import './CharacterCard.css'

export const CharacterCard = ({name, image, status, location, selected, selectFunction}) => {

     const [change, setChange] = useState(true);

     const callSelectClick = () => {

        setChange(!change)

        selectFunction()

     }

     return (
        <div className={`characterCardDesign ${!change ? selected : ''}`} onClick={callSelectClick}>
            <div>{name}</div>
            <div><img className='avatar' src={image} alt={name}/></div>
            <div>{status}</div>
            <div>{location}</div>
        </div>
     )
}