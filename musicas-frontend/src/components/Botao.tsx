import React from 'react';
import styled from 'styled-components';

interface BotaoProps {
    asLink?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    icon?: React.ReactNode;
}

const StyledButton = styled.button<{ disabled?: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 15px;
    font-size: 16px;
    color: white;
    background-color: ${(props) => (props.disabled ? '#ccc' : '#FF0000')};
    border: none;
    border-radius: 5px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    text-decoration: none;

    &:hover {
        background-color: ${(props) => (props.disabled ? '#ccc' : '#be0000')};
    }

    transition: background-color 0.3s ease;
`;

const Botao: React.FC<BotaoProps> = ({ asLink, onClick, disabled, children, icon }) => {
    const handleClick = () => {
        if (disabled) return;
        if (onClick) {
            onClick();
        }
    };

    return (
        <StyledButton as={asLink ? 'a' : 'button'} onClick={handleClick} disabled={disabled}>
            {icon && <span>{icon}</span>}
            {children}
        </StyledButton>
    );
};

export default Botao;