import axios from 'axios';

const api = axios.create({ baseURL: 'https://localhost:44322/api/'});
export default api;
export const EndPoints = {
    student: 'student', 
    courses: 'courses',
};