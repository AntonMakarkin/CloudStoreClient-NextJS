import API from './config/axios';
import { LoginRequest, RegisterRequest, LoginResponse, RegisterResponse } from './types/auth.type';

export const login = async (values: LoginRequest): Promise<LoginResponse> => {
    const { data } = await API.post('/login', values)
    return data
};

export const register = async (values: RegisterRequest): Promise<RegisterResponse> => {
    const { data } = await API.post('/registration', values);
    return data;
}