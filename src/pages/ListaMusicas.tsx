import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { listar } from '../services/axiosServices';
import { toast } from 'react-toastify';

const ListaMusicas: React.FC = () => {
    const [musicas, setMusicas] = useState<any[]>([]);

    useEffect(() => {
        const fetchMusicas = async () => {
            try {
                const response = await listar();
                setMusicas(response);
                console.log(response);
                console.log(response.data);
            } catch (error) {
                toast.error('Erro ao buscar músicas');
            } finally {
                toast.success('Músicas carregadas com sucesso');
            }
        };

        fetchMusicas();
    }, []);

    return (
        <ListaMusicasContainer>
            {Array.isArray(musicas) && musicas.map((musica, index) => (
                <MusicaItem key={index}>
                    <MusicaId>{musica.id}</MusicaId>
                    <MusicaTitulo>{musica.titulo}</MusicaTitulo>
                    <DetalhesContainer>
                        <MusicaDetalhes>{musica.artista}</MusicaDetalhes>
                        <MusicaDetalhes>{musica.ano}</MusicaDetalhes>
                    </DetalhesContainer>
                    <MusicaCadastro>{musica.dataCadastro}</MusicaCadastro>
                </MusicaItem>
            ))}
        </ListaMusicasContainer>
    );
};

const DetalhesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
`;

const MusicaCadastro = styled.p`
    margin: 5px 0 0;
    font-size: 12px;
    color: #666;
`;

const MusicaId = styled.p`
    font-size: 14px;
    margin: 0 0 5px;
`;

const ListaMusicasContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MusicaItem = styled.div`
    background-color: #191b20;
    border: 1px solid #40434d;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    width: 100%;
    max-width: 600px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MusicaTitulo = styled.h3`
    margin: 0;
    font-size: 18px;
`;

const MusicaDetalhes = styled.p`
    margin: 5px 0 0;
    font-size: 14px;
    color: #999;
`;

export default ListaMusicas;