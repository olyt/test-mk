import styled from 'styled-components';

const BasicGrid = styled.div`
  max-height: 800px;
  max-width: 800px;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-template-rows: repeat(${({ rows }) => rows}, 1fr);
`;

export default BasicGrid;