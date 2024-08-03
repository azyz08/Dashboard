import axios from "axios";

export const inctance = axios.create(
    {
        baseURL: "https://crudcrud.com/api/78b3ea2149f847118057cf4c45eee8d5",
    }
);