import $api from "../http";
import { AxiosResponse } from "axios";

export default class CinemaService {
    static async getCinema(): Promise<AxiosResponse<CinemaResponse>> {
        return $api.get<CinemaResponse>('/cinemas');
    }
}