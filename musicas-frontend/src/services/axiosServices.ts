import axiosInstance from "../api/axiosConfig";

export const listar = async () => {
    try {
        const response = await axiosInstance.get('/listar');
        return response.data;
    } catch (error) {
        console.error("Error fetching musicas:", error);
        throw error;
    }
};

export const salvar = async (musica: any) => {
    try {
        const response = await axiosInstance.post('/salvar', musica);
        return response.data;
    } catch (error) {
        console.error("Error adding musica:", error);
        throw error;
    }
};