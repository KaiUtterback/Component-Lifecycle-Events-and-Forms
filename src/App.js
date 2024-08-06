import React, { useState } from 'react';
import './App.css';
import CharacterList from './Components/CharacterList';
import CharacterDetail from './Components/CharacterDetail';

function App() {
    const [selectedCharacterId, setSelectedCharacterId] = useState(null);

    return (
        <div className="App">
            <h1>Marvel Characters</h1>
            <CharacterList onCharacterSelect={setSelectedCharacterId} />
            <CharacterDetail characterId={selectedCharacterId} />
        </div>
    );
}

export default App;
