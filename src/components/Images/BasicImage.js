import styled from 'styled-components';

const BasicImage = styled.img`
  ${({ width }) => width && 'width: ' + width}
  ${({ height }) => height && 'width: ' + height}
`;

export default BasicImage;