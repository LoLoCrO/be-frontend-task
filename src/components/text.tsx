import React from 'react';
import styled from 'styled-components';

interface TextProps {
    textColor: string;
    text: string;
    onClick: ()=> void;
}

const Text: React.FC<TextProps> = ({ textColor, text, onClick }) => {
    

    return <Paragraph textColor={textColor} onClick={onClick}>{text}</Paragraph>
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
