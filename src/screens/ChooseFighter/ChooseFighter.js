import React, { useEffect, useRef, useState } from 'react';
import CharactersGrid from '../../components/Grids/CharactersGrid';
import CharacterPreview from '../../components/Images/CharacterPreview';
import characterPointer from '../../util/characterPointer';
import { returnKey } from '../../util/keyboard';
import { ChooseFighterWrapper, FightersWrapper, HeaderText, KombatZoneText } from './styles';

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
    }, [activeCharacter, setChosenCharacter]);

    return (
        <ChooseFighterWrapper>
            <HeaderText>select your fighter</HeaderText>
            <FightersWrapper rows={1}>
                <CharacterPreview src={activeCharacter.presentation} height="70%" alt="MK Fighter"/>
                <CharactersGrid characters={characters}
                                setCharacters={setCharacters}
                                setChosenCharacter={setChosenCharacter}
                />
            </FightersWrapper>
            <KombatZoneText>kombat zone: soul chamber</KombatZoneText>
        </ChooseFighterWrapper>
    );
};

export default ChooseFighter;