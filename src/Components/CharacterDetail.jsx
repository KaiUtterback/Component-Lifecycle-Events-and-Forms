import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CharacterDetail.css';

const CharacterDetail = ({ characterId }) => {
    const [character, setCharacter] = useState(null);
    const PUBLIC_KEY = '05acf549a7b2719cbfe9e1c8adb153db';
    const HASH = 'b3dd7624719bfd35b9f6cbdf50303745';

    useEffect(() => {
        const fetchCharacterDetail = async () => {
            if (!characterId) return;
            try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`);
                setCharacter(response.data.data.results[0]);
            } catch (error) {
                console.error('Error fetching character details:', error);
            }
        };
        fetchCharacterDetail();
    }, [characterId]);

    if (!character) {
        return <div>Select a character to see details</div>;
    }

    return (
        <div className="character-detail">
            <h2>{character.name}</h2>
            <p>{character.description || 'No description available.'}</p>
            <h3>Comics:</h3>
            <ul>
                {character.comics.items.map((comic, index) => (
                    <li key={index}>{comic.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterDetail;
