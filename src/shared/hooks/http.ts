
import axiosInstance from "./interceptors";

interface ApiResponse<T = any> {
    data: T;
    // Додайте інші поля відповіді, якщо потрібно (наприклад, статус, заголовки тощо)
}

const useHttp = () => {
    const sendRequest = async <T>(method: string, url: string, data: any = null): Promise<ApiResponse<T>> => {
        try {
            // @ts-ignore
            const response = await axiosInstance[method](url, data);
            console.log(response, 'success');
            return response as ApiResponse<T>;
        } catch (error) {
            console.error('error', error);
            throw error;
        }
    };

    const post = async (form: object): Promise<ApiResponse<void>> => {
        return await sendRequest<void>('post', 'http://localhost:5000/api/todo/create', form);
    };

    const get = async (): Promise<ApiResponse<void>> => {
        return await sendRequest<void>('get', 'http://localhost:5000/api/todo');
    };

    const put = async (id: string, form: object): Promise<ApiResponse<void>> => {
        return await sendRequest<void>('put', `http://localhost:5000/api/todo/${id}`, form);
    };

    const del = async (id: number): Promise<ApiResponse<void>> => {
        return await sendRequest<void>('delete', `http://localhost:5000/api/todo/${id}`);
    };

    return { get, post, put, del };
};

export default useHttp;

