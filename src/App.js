import styled from 'styled-components';
import ChooseFighter from './screens/ChooseFighter/ChooseFighter';
import { useState } from 'react';

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App = () => {
    const [chosenCharacter, setChosenCharacter] = useState('');
    return (
        <AppWrapper>
            {
                chosenCharacter
                    ? 'versus screen placeholder'
                    : <ChooseFighter setChosenCharacter={setChosenCharacter}/>
            }
        </AppWrapper>
    );
};

export default App;
