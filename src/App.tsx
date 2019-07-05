import React, { useState } from 'react';
import Text from '../src/components/text';
import Block from '../src/components/block';
import styled from 'styled-components';

const App: React.FC = () => {
  const [textColor, setTextColor] = useState<string>('yellow');
  const [text, setText] = useState<string>('type here');
  const [color, setColor] = useState<string>(textColor);
  const [colorArray, setColorArray] = useState<string[]>([]);

  const randomColorURL = `http://www.colr.org/json/color/random`;

  const addColorToArray = (color: string) => {
    const newColorArray = colorArray.concat(color);
    setColorArray(newColorArray);
  }

  const printColorArray = () => colorArray.map((color, i) => (<Block key={i} backgroundColor={color} />));

  const randomColor = () => {
    fetch(randomColorURL)
      .then(res => res.json())
      .then(data => {
        setColor(`#` + (data.new_color || `000`));
        addColorToArray((data.new_color || `000`));
      });
  }
  return (
    <React.Fragment>
      <Text textColor={color} text={text} onClick={randomColor}></Text>
      <Input value={text} onChange={e => setText(e.target.value)} />
      <Container>
        {printColorArray()}
      </Container>
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

const Container = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;