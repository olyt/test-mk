import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BasicGrid from './BasicGrid';
import { qwerty } from '../../util/keyboard';
import shuffle from '../../util/shuffle';

const StyledSlotsGrid = styled(BasicGrid)`
  width: 30%;
  position: absolute;
  bottom: 5%;
  left: 0;
  right: 0;
  margin: auto;;
`;

const SlotWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: black;
`;

const SlotImg = styled.img`
  width: 100%;
`;

const SlotsGrid = () => {
    const [slots, setSlots] = useState(Array(6)
        .fill('/img/mk-logo.png')
        .map(src => {
            return (
                <SlotWrapper key={Math.random()}>
                    <SlotImg src={src}/>
                </SlotWrapper>
            );
        }));

    const abilities = Array(40).fill('https://placehold.co/200x200.png');

    useEffect(() => {
        const handleSlotKeyPres = (event) => {
            if (qwerty.includes(event.code)) {
                shuffle(abilities);
                setSlots(prevState => {
                    return prevState.map((slot, index) => {
                        if (index === qwerty.indexOf(event.code)) {
                            return <SlotWrapper key={Math.random()}>
                                <SlotImg src={abilities[Math.floor(Math.random() * abilities.length)]}/>
                            </SlotWrapper>;
                        }

                        return slot;
                    });
                });
            }
        };

        window.addEventListener('keypress', handleSlotKeyPres);

        return () => {
            window.removeEventListener('keypress', handleSlotKeyPres);
        };
    }, [abilities]);

    return (
        <StyledSlotsGrid rows={1} columns={6}>
            {slots}
        </StyledSlotsGrid>
    );
};

export default SlotsGrid;