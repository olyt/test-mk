import React from 'react';
import styled from 'styled-components';

const PreviewImg = styled.img`
  height: 70%;
  align-self: end;
  z-index: 15;
`;

const CharacterPreview = ({ src }) => {
    return (
        <PreviewImg src={src} alt="MK Fighter"/>
    );
};

export default CharacterPreview;