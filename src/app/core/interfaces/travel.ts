export interface I_Travel {
    id?: number,
    name: string,
    email: string,
    tel?: string;
    cep?: string,
    address?: string;
    addressComplement?: string,
    addressNumber?: string;
    city?: string;
    uf?: string;
    country?: string;
    destiny: string;
    tripValue: number;
};