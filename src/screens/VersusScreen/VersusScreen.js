import React, { useEffect } from 'react';
import { FightersWrapper, HeaderText, VersusScreenWrapper, VersusText } from './styles';
import SlotsGrid from '../../components/Grids/SlotsGrid';
import characterPointer from '../../util/characterPointer';
import CharacterVersus from '../../components/Images/CharacterVersus';

const VersusScreen = ({ character }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.reload();
        }, 4000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <VersusScreenWrapper>
            <HeaderText>battle 1</HeaderText>
            <FightersWrapper>
                <CharacterVersus src={character} height="100%" alt="MK Fighter"/>
                <VersusText>vs</VersusText>
                <CharacterVersus
                    src={characterPointer[Math.floor(Math.random() * characterPointer.length)].versus}
                    mirrored
                    height="100%"
                    alt="MK Fighter"
                />
            </FightersWrapper>
            <SlotsGrid/>
        </VersusScreenWrapper>
    );
};

export default VersusScreen;