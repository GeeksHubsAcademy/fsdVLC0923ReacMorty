
import React, { useState, useEffect } from 'react';
import { GetCharacters } from '../../services/apiCalls';

export const Home = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(()=>{

        if(characters.length === 0){

            setTimeout(()=>{

                GetCharacters()
                .then(
                    characters => {
                        console.log(characters)

                        setCharacters(characters.data.results)
                    }
                )
                .catch(error => console.log(error))

            }, 2000)
           
        }

    },[characters]);


    return (
        <>
            {
                characters.length > 0 

                ? (
                    <>
                        {
                            characters.map(
                                character => {
                                    return (
                                        <div key={character.id}>{character.name}</div>
                                    )
                                }
                            )
                        }
                    </>
                )

                : (
                    <div>Aún no han venido</div>
                )
            }
        </>
    )
}