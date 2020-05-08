import api from './apiConfig';

export const getProducts = async () => {
    try {
        const response = await api.get('/posts')
        return response.data
    } catch (error) {
        throw error
    }
}