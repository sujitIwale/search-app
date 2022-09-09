import axios from "axios";
import LRUCache from "lru-cache";

const baseApiUrl = "https://picsum.photos/v2/list";

const cache = new LRUCache({ max: 15, ttl: 1000 * 60 * 5 });

export type GetRequestReturnType = { ok: boolean; data: []; query: string };

export const getRequest = async (query: string, page: number) => {
  const url = `${baseApiUrl}?page=${page}&limit=5&query=${query}`;
  try {
    let cachedData = cache.get(url);
    if (cachedData) {
      return {
        data: cachedData,
        ok: true,
        query: query,
      };
    }
    const data = await axios.get(url);

    cache.set(url, data.data);
    return {
      data: data.data,
      ok: true,
      query: query,
    };
  } catch (error) {
    console.log(error);
    return {
      data: [],
      ok: false,
      query: query,
    };
  }
};
