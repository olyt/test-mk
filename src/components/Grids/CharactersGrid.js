import React, { useEffect } from 'react';
import BasicGrid from './BasicGrid';
import CharacterIcon from '../Images/CharacterIcon';
import { arrows } from '../../util/keyboard';
import styled from 'styled-components';

const StyledCharactersGrid = styled(BasicGrid)`
  width: 100%;
  height: 100%;
`

const CharactersGrid = ({ characters, setCharacters }) => {
    useEffect(() => {
        const onArrowKey = (event) => {
            if (arrows.includes(event.code)) {
                const activeCharacter = characters.find(({ isActive }) => isActive);

                switch (event.code) {
                    case 'ArrowUp':
                        setCharacters(characters.map((character) => ({
                            ...character,
                            isActive: character.y === (activeCharacter.y - 1 < 1 ? 3 : activeCharacter.y - 1)
                                && character.x === activeCharacter.x
                        })));
                        break;
                    case 'ArrowDown':
                        setCharacters(characters.map((character) => ({
                            ...character,
                            isActive: character.y === (activeCharacter.y + 1 > 3 ? 1 : activeCharacter.y + 1)
                                && character.x === activeCharacter.x
                        })));
                        break;
                    case 'ArrowRight':
                        setCharacters(characters.map((character) => ({
                            ...character,
                            isActive: character.x === (activeCharacter.x + 1 > 5 ? 1 : activeCharacter.x + 1)
                                && character.y === activeCharacter.y
                        })));
                        break;
                    case 'ArrowLeft':
                        setCharacters(characters.map((character) => ({
                            ...character,
                            isActive: character.x === (activeCharacter.x - 1 < 1 ? 5 : activeCharacter.x - 1)
                                && character.y === activeCharacter.y
                        })));
                        break;
                    default:
                        return;
                }
            }
        };

        window.addEventListener('keydown', onArrowKey);

        return () => {
            window.removeEventListener('keydown', onArrowKey);
        };
    }, [characters]);

    const listToRender = characters.map(({ icon, y, x, isActive }) => {
        return <CharacterIcon iconSrc={icon} isActive={isActive} key={`y=${y}x=${x}`}/>;
    });

    return (
        <StyledCharactersGrid columns={5} rows={3}>
            {listToRender}
        </StyledCharactersGrid>
    );
};

export default CharactersGrid;