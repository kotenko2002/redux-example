import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/AuthResponse";

export default class AuthService {
    static async login(usename: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.patch<AuthResponse>('/login', {usename, password});
    }

    static async registration(usename: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.patch<AuthResponse>('/registration', {usename, password});
    }

    static async logout(): Promise<void> {
        return $api.patch('/logout');
    }
}