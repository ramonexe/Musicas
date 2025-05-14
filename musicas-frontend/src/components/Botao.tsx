import React from 'react';
import styled from 'styled-components';

interface BotaoProps {
  asLink?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const StyledButton = styled.button<{ disabled?: boolean; temIcone: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${(props) => (props.temIcone ? '0' : '8px')};
  padding: 0 12px;
  height: 40px;
  font-size: 16px;
  color: white;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#FF0000')};
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  overflow: hidden;
  transition: all 0.3s ease;

  ${(props) =>
    props.temIcone &&
    `
    width: fit-content;
    padding: 0;
    justify-content: center;

    &:hover {
      width: ${props.temIcone ? 'fit-content' : 'none'};
      padding: 0 12px 0 0;
      justify-content: flex-start;
    }
  `}
`;

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
`;

const TextContainer = styled.span<{ temIcone: boolean }>`
  white-space: nowrap;
  opacity: ${(props) => (props.temIcone ? 0 : 1)};
  max-width: ${(props) => (props.temIcone ? '0' : '100%')};
  overflow: hidden;
  transition: opacity 0.3s ease, max-width 0.3s ease, margin-left 0.3s ease;

  ${StyledButton}:hover & {
    opacity: 1;
    max-width: 200px;
    margin-left: ${(props) => (props.temIcone ? '8px' : '0')};
  }
`;

const Botao: React.FC<BotaoProps> = ({ asLink, onClick, disabled, children, icon }) => {
  const handleClick = () => {
    if (disabled) return;
    onClick?.();
  };

  const temIcone = !!icon;

  return (
    <StyledButton
      as={asLink ? 'a' : 'button'}
      onClick={handleClick}
      disabled={disabled}
      temIcone={temIcone}
    >
      {temIcone && <IconContainer>{icon}</IconContainer>}
      <TextContainer temIcone={temIcone}>{children}</TextContainer>
    </StyledButton>
  );
};

export default Botao;
