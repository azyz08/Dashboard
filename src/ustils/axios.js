import axios from "axios";

export const inctance = axios.create(
    {
        baseURL: "https://crudcrud.com/api/94f6723b872e401e844d83e8a5fb442f",
    }
);