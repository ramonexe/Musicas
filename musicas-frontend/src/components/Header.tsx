import React from 'react';
import styled from 'styled-components';
import Botao from './Botao';
import { useNavigate } from 'react-router-dom';
import logo from '../../public/icon.svg';
import { Plus } from 'lucide-react';

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 20px;
    background-color: #282c34;
    color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
`;

const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <img src={logo} alt="Logo" style={{ width: '42px', height: '42px', marginRight: '20px' }} />
            <ButtonGroup>
                <Botao onClick={() => navigate("/")}>Lista de Músicas</Botao>
                <Botao onClick={() => navigate("/adicionar")} icon={<Plus />}>Adicionar Música</Botao>
            </ButtonGroup>
        </HeaderContainer>
    );
};

export default Header;