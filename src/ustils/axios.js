import axios from "axios";

export const inctance = axios.create(
    {
        baseURL: "https://crudcrud.com/api/f43dc070ec3c4835baa452c1d13846d5",
    }
);
