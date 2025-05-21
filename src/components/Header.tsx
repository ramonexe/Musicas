import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/icon.svg';
import { AudioLines, Plus } from 'lucide-react';
import { Button } from 'dynamix-button';

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px 20px;
    background-color: #282c34;
    color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;

const BotaoContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const TituloPagina = styled.h1`
    font-size: 24px;
    color: #fff;
    margin: 0;
    margin-right: 20px;
`;

const Header: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    let titulo = '';
    if (location.pathname === '/') {
        titulo = 'Lista de Músicas';
    } else if (location.pathname === '/salvar') {
        titulo = 'Adicionar Música';
    } else {
        titulo = 'Músicas';
    }

    return (
        <HeaderContainer>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="Logo" style={{ width: '42px', height: '42px', marginRight: '20px' }} />
                <TituloPagina>{titulo}</TituloPagina>
            </div>
            <BotaoContainer>
                <Button onClick={() => navigate("/")} icon={<AudioLines />}>Lista de Músicas</Button>
                <Button onClick={() => navigate("/salvar")} icon={<Plus />}>Adicionar Música</Button>
            </BotaoContainer>
        </HeaderContainer>
    );
};

export default Header;