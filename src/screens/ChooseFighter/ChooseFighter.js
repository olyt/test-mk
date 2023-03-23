import React, { useEffect, useRef, useState } from 'react';
import CharactersGrid from '../../components/Grid/CharactersGrid';
import CharacterPreview from '../../components/CharacterPreview/CharacterPreview';
import characterPointer from '../../util/characterPointer';
import { returnKey } from '../../util/keyboard';

const ChooseFighter = ({ setChosenCharacter }) => {
    const [characters, setCharacters] = useState(characterPointer.map((character, index) => {
        const x = (index < 5 && index + 1) || (index < 10 && index - 4) || (index - 9);
        const y = (index < 5 && 1) || (index < 10 && 2) || 3;
        const isActive = x === 1 && y === 1;

        return { ...character, y, x, isActive };
    }));
    const timerRef = useRef(null);

    const activeCharacter = characters.find(({ isActive }) => isActive);

    useEffect(() => {
        const onReturnKey = (event) => {
            if (event.code === returnKey) {
                timerRef.current = setTimeout(() => {
                    setChosenCharacter(activeCharacter);
                }, 2000);
            }
        };

        window.addEventListener('keyup', onReturnKey);

        return () => {
            window.removeEventListener('keyup', onReturnKey);
            clearTimeout(timerRef.current);
        };
    });

    return (
        <div>
            <h2>SELECT YOUR FIGHTER</h2>
            <div>
                <CharacterPreview src={activeCharacter.presentation}/>
                <CharactersGrid characters={characters}
                                setCharacters={setCharacters}
                                setChosenCharacter={setChosenCharacter}
                />
            </div>
            <span>KOMBAT ZONE: SOUL CHAMBER</span>
        </div>
    );
};

export default ChooseFighter;