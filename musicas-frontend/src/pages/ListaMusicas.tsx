import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllMusicas } from '../services/axiosServices';

const ListaMusicas: React.FC = () => {
    const [musicas, setMusicas] = useState<any[]>([]);

    useEffect(() => {
        const fetchMusicas = async () => {
            try {
                const response = await getAllMusicas();
                setMusicas(response.data);
            } catch (error) {
                console.error('Erro ao buscar músicas:', error);
            }
        };

        fetchMusicas();
    }, []);

    return (
        <ListaMusicasContainer>
            {musicas.map((musica, index) => (
                <MusicaItem key={index}>
                    <MusicaTitle>{musica.titulo}</MusicaTitle>
                    <MusicaDetails>{musica.artista}</MusicaDetails>
                </MusicaItem>
            ))}
        </ListaMusicasContainer>
    );
};

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

const MusicaTitle = styled.h3`
    margin: 0;
    font-size: 18px;
`;

const MusicaDetails = styled.p`
    margin: 5px 0 0;
    font-size: 14px;
    color: #666;
`;

export default ListaMusicas;