import axios from "axios";

export const inctance = axios.create(
    {
        baseURL: "https://crudcrud.com/api/3cae43c600eb41e0af0240d8ce2a7424",
    }
);