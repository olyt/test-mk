import React from 'react';
import styled, { css } from 'styled-components';

const activeStyles = css`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 10px solid greenyellow;
    box-sizing: border-box;
  }

  &::after {
    content: '1';
    position: absolute;
    display: inline-block;
    top: 10%;
    left: 50%;
    color: greenyellow;
    font-size: 50px;
    font-weight: bold;
    transform: translateX(-50%);
    z-index: 10;
  }
`;

const ImgWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;

  ${({ isActive }) => isActive && activeStyles}
`;

const CharacterImage = styled.img`
  width: 100%;
`;

const CharacterIcon = ({ iconSrc, isActive }) => {
    return (
        <ImgWrapper isActive={isActive}>
            <CharacterImage src={iconSrc} alt="MK Fighter"/>
        </ImgWrapper>
    );
};

export default CharacterIcon;