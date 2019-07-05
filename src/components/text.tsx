import React, { useState } from 'react';
import styled from 'styled-components';

interface TextProps {
    textColor: string;
    text: string
}

const Text: React.FC<TextProps> = ({ textColor, text }) => {
    const [color, setColor] = useState<string>(textColor);
    const randomColorURL = `http://www.colr.org/json/color/random`;

    const randomColor = () => {
        fetch(randomColorURL)
            .then(res => res.json())
            .then(data => setColor(`#` + (data.new_color || `000`)));
    }

    return <Paragraph textColor={color} onClick={e => randomColor()}>{text}</Paragraph>
}

export default Text;


interface ParagraphProps {
    textColor: string;
}

const Paragraph = styled.p`
color: ${({ textColor }: ParagraphProps) => textColor};
border: 2px solid gray;
padding: 10px;
border-radius: 10px;
text-align: center;
cursor: pointer;
justify-content: center;
display: flex;
flex-direction: row;  
`;