import React, { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Button } from 'dynamix-button';
import { salvar } from '../services/axiosServices';

const AdicionarMusica: React.FC = () => {
    const [titulo, setTitulo] = useState('');
    const [artista, setArtista] = useState('');
    const [ano, setAno] = useState('');
    const navigate = useNavigate();

    const handleAdicionarMusica = async () => {
        const musica = {
            titulo,
            artista,
            ano,
        };

        console.log(musica);

        try {
            const response = await salvar(musica);
            console.log(response.data);
            toast.success('Música adicionada com sucesso!');
            navigate('/');
        } catch (error: any) {
            console.log(error);
            let mensagemAno = error.response?.data;
            let mensagemErro = mensagemAno;
            const data = error.response?.data;
            if (typeof data === 'string') {
                const match = data.match(/interpolatedMessage='([^']+)'/);
                if (match && match[1]) {
                    mensagemErro = match[1];
                }
            }
            toast.error(mensagemErro);
        }
    };

    const handleCancelar = () => {
        setTitulo('');
        setArtista('');
        setAno('');
        toast.info('Adição de música cancelada.');
        navigate('/');
    };

    return (
        <AdicionarMusicaContainer>
            <h2>Adicionar Nova Música</h2>
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
                value={ano}
                onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) {
                        setAno(value);
                    }
                }}
            />
            <BotaoContainer>
                <Button onClick={handleAdicionarMusica}>Adicionar</Button>
                <Button onClick={handleCancelar} variant='outline'>Cancelar</Button>
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
    margin: 5px 0;
    background-color: #191b20;
    color: #666;
    border: 1px solid #40434d;
    border-radius: 5px;
`;

export default AdicionarMusica;