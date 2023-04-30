export interface LoginRequest {
    email: string;
    password: string;
};

export interface LoginResponse {
    user: {
        email: string;
        diskSpace: number;
        usedSpace: number;
        files: any[];
    },
    message: string;
};

export type RegisterRequest = LoginRequest & { name: string };
export type RegisterResponse = LoginResponse;