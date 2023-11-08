
import React, { useState, useEffect } from 'react';
import { GetCharacters } from '../../services/apiCalls';
import { CharacterCard } from '../../common/CharacterCard/CharacterCard';

import "./Home.css";

export const Home = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(()=>{

        if(characters.length === 0){

            // setTimeout(()=>{

                GetCharacters()
                .then(
                    characters => {
                        console.log(characters)

                        setCharacters(characters.data.results)
                    }
                )
                .catch(error => console.log(error))

            // }, 2000)
           
        }

    },[characters]);

    const tellMe = (argumento) => {
        console.log(argumento)
    }


    return (
        <div className='homeDesign'>
            {
                characters.length > 0 

                ? (
                    <div className='characterRoster'>
                        {
                            characters.map(
                                character => {
                                    return (
                                        <CharacterCard 
                                            key={character.id}
                                            name={character.name}
                                            image={character.image}
                                            status={character.status}
                                            location={character.location.name}
                                            selected={"selectedCard"}
                                            selectFunction={()=>tellMe(character)}
                                        />
                                    )
                                }
                            )
                        }
                    </div>
                )

                : (
                    <div>Aún no han venido</div>
                )
            }
        </div>
    )
}