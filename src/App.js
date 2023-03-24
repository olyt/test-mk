import styled from 'styled-components';
import ChooseFighter from './screens/ChooseFighter/ChooseFighter';
import { useState } from 'react';
import VersusScreen from './screens/VersusScreen/VersusScreen';

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App = () => {
    const [chosenCharacter, setChosenCharacter] = useState(null);
    return (
        <AppWrapper>
            {
                chosenCharacter
                    ? <VersusScreen character={chosenCharacter.versus}/>
                    : <ChooseFighter setChosenCharacter={setChosenCharacter}/>
            }
        </AppWrapper>
    );
};

export default App;
