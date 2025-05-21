import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/icon.svg';
import { AudioLines, Plus } from 'lucide-react';
import { Button } from 'dynamix-button';

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 20px;
    background-color: #282c34;
    color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;

const BotaoContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <img src={logo} alt="Logo" style={{ width: '42px', height: '42px', marginRight: '20px' }} />
            <BotaoContainer>
                <Button onClick={() => navigate("/")} icon={<AudioLines />}>Lista de Músicas</Button>
                <Button onClick={() => navigate("/adicionar")} icon={<Plus />}>Adicionar Música</Button>
            </BotaoContainer>
        </HeaderContainer>
    );
};

export default Header;