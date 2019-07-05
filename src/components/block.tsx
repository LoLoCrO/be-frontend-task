import React from 'react';
import styled from 'styled-components';

interface BlockProps {
    backgroundColor: string
}

const Block: React.FC<BlockProps> = ({ backgroundColor }) => {
    return <ColorBlock backgroundColor={backgroundColor} />
}

export default Block;

interface ColorBlockProps {
    backgroundColor: string
}

const ColorBlock = styled.div`
    background-color:${({ backgroundColor }: ColorBlockProps) => `#` + backgroundColor};
    margin: 0.5rem auto;
    width: 3rem;
    height: 3rem;
`;
