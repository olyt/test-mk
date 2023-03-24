import styled from 'styled-components';

export const VersusScreenWrapper = styled.div`
  background: url("/img/versus.png") no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  padding: 20px 0 0 0;
`;

export const FightersWrapper = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const VersusText = styled.span`
  text-transform: uppercase;
  font-size: 100px;
  color: black;
`;

export const HeaderText = styled.h2`
  text-transform: uppercase;
  font-size: 50px;
  color: grey;
`;