import React, { useState } from 'react';
import Text from '../src/components/text';
import styled from 'styled-components';

const App: React.FC = () => {
  const [textColor, setTextColor] = useState<string>('yellow');
  const [text, setText] = useState<string>('type here');


  
  return (
    <React.Fragment>
      <Text textColor={textColor} text={text}></Text>
      <input value={text} onChange={e => setText(e.target.value)}></input>
    </React.Fragment>

  );
}

export default App;
