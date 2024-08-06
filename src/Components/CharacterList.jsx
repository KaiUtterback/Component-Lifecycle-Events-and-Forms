import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CharacterList.css';

const CharacterList = ({ onCharacterSelect }) => {
    const [characters, setCharacters] = useState([]);
    const PUBLIC_KEY = '05acf549a7b2719cbfe9e1c8adb153db';
    const HASH = 'b3dd7624719bfd35b9f6cbdf50303745';
    const TIMESTAMP = '1';
    const API_URL = `https://gateway.marvel.com/v1/public/characters?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`;

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                console.log("Fetching data from:", API_URL);
                console.log("Timestamp:", TIMESTAMP);
                console.log("Public Key:", PUBLIC_KEY);
                console.log("Hash:", HASH);
                const response = await axios.get(API_URL);
                console.log("Response:", response);
                setCharacters(response.data.data.results);
            } catch (error) {
                console.error('Error fetching characters:', error);
                if (error.response) {
                    console.error('Response data:', error.response.data);
                }
            }
        };
        fetchCharacters();
    }, [API_URL]);

    return (
        <div className="character-list">
            {characters.map(character => (
                <div key={character.id} className="character-item" onClick={() => onCharacterSelect(character.id)}>
                    <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
                    <h3>{character.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default CharacterList;
