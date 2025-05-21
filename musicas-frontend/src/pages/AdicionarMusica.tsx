import React, { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Button } from 'dynamix-button';

const AdicionarMusica: React.FC = () => {
    const [titulo, setTitulo] = useState('');
    const [artista, setArtista] = useState('');
    const [anoLancamento, setAnoLancamento] = useState('');
    const navigate = useNavigate();

    const handleAdicionarMusica = () => {
        if (!titulo || !artista || !anoLancamento) {
            toast.error('Por favor, preencha todos os campos.');
            return;
        }
    };

    const handleCancelar = () => {
        setTitulo('');
        setArtista('');
        setAnoLancamento('');
        toast.info('Adição de música cancelada.');
        navigate('/');
    };

    return (
        <AdicionarMusicaContainer>
            <h1>Adicionar Nova Música</h1>
            <Input
                type="text"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />
            <Input
                type="text"
                placeholder="Artista"
                value={artista}
                onChange={(e) => setArtista(e.target.value)}
            />
            <Input
                type="text"
                placeholder="Ano de Lançamento"
                value={anoLancamento}
                onChange={(e) => setAnoLancamento(e.target.value)}
            />
            <BotaoContainer>
                <Button onClick={handleCancelar}>Cancelar</Button>
                <Button onClick={handleAdicionarMusica}>Adicionar</Button>
            </BotaoContainer>
        </AdicionarMusicaContainer>
    );
};

const BotaoContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const AdicionarMusicaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const Input = styled.input`
    width: 300px;
    padding: 10px;
    margin: 10px 0;
    background-color: #191b20;
    color: #666;
    border: 1px solid #40434d;
    border-radius: 5px;
`;

export default AdicionarMusica;