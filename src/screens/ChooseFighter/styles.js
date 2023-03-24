import styled, { css } from 'styled-components';
import BasicGrid from '../../components/Grids/BasicGrid';

const textMixin = css`
  text-transform: uppercase;
  font-size: 30px;
  color: white;
`;

export const ChooseFighterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: grey;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  box-sizing: border-box;
`;

export const HeaderText = styled.h2`
  ${textMixin};
  font-size: 45px;
`;

export const KombatZoneText = styled.span`
  ${textMixin};
`;

export const FightersWrapper = styled(BasicGrid)`
  justify-content: center;
  width: 100%;
  grid-template-columns: 20% 60% 20%;
  
`