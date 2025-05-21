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