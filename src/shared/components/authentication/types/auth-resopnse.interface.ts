export interface AuthResopnseInterface {
    method: string,
    data: AuthDataInteface,
}
interface AuthDataInteface {
    email: string,
    password: number
}
