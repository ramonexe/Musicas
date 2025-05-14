import axiosInstance from "../api/axiosConfig";

export const getAllMusicas = async () => {
    try {
        const response = await axiosInstance.get('/musicas');
        return response.data;
    } catch (error) {
        console.error("Error fetching musicas:", error);
        throw error;
    }
};