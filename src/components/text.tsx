import React, { useState } from 'react';
import styled from 'styled-components';

interface TextProps {
    textColor: string;
    text: string
}

const Text: React.FC<TextProps> = ({ textColor, text }) => {
    const [color, setColor] = useState<string>(textColor);

    return <Paragraph color={color}>{text}</Paragraph>
}

export default Text;
// color: ${({ textColor }: TextProps) => textColor};

const Paragraph = styled.p`
border: 2px solid gray;
padding: 10px;
border-radius: 10px;
text-align: center;
cursor: pointer;
justify-content: center;
display: flex;
flex-direction: row;  
`;