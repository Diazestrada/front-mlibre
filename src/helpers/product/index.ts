import { request } from "../../utils/http";

export const getProductsSearch = async (query: string) => {
  const response = await request("GET", `/api/items?q=${query}`);
  return response.data;
};

export const getByIdProduct = async (id: string) => {
  const response = await request("GET", `/api/items/${id}`);
  return response.data;
};
