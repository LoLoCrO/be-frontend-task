import React, { useState } from 'react';
import Text from '../src/components/text';
import styled from 'styled-components';

const App: React.FC = () => {
  const [textColor, setTextColor] = useState<string>('yellow');
  const [text, setText] = useState<string>('type here');
 
  return (
    <React.Fragment>
      <Text textColor={textColor} text={text}></Text>
      <Input value={text} onChange={e => setText(e.target.value)} />
    </React.Fragment>
  );
}

export default App;

const Input = styled.input`
  width: 15rem;
  text-align: center;
  padding: 10px;
  margin: 20px auto;
  border: 2px solid gray;
  border-radius: 4px;
  justify-self: center; 
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;