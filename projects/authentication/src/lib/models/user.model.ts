export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password?: string;
    token?: string;
    created_at: string;
    updated_at: string;
}
