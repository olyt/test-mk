import styled, { css } from 'styled-components';
import BasicImage from './BasicImage';

const mirrorCss = css`
  transform: rotateY(180deg);
`;

const CharacterVersus = styled(BasicImage)`
  ${({ mirrored }) => mirrored && mirrorCss}
`;

export default CharacterVersus