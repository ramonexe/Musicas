import React, { useState } from 'react';
import styled from 'styled-components';
import Botao from '../components/Botao';
import { toast } from 'react-toastify';

const AdicionarMusica: React.FC = () => {
    const [titulo, setTitulo] = useState('');
    const [artista, setArtista] = useState('');
    const [anoLancamento, setAnoLancamento] = useState('');

    const handleAdicionarMusica = () => {
        if (!titulo || !artista || !anoLancamento) {
            toast.error('Por favor, preencha todos os campos.');
            return;
        }
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
            <Botao onClick={handleAdicionarMusica}>Adicionar Música</Botao>
        </AdicionarMusicaContainer>
    );
};

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
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export default AdicionarMusica;