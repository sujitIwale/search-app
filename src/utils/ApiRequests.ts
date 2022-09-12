import LRUCache from "lru-cache";
import { Octokit } from "octokit";

export type DataType = {
  login: string;
  id: 3054449;
  avatar_url: string;
  html_url: string;
};

const users_per_page = 5;

const cache = new LRUCache({ max: 15, ttl: 1000 * 60 * 5 });

export type GetRequestReturnType = {
  ok: boolean;
  data: [];
  query: string;
};

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_API_TOKEN,
});

export const getRequest = async (query: string, page: number) => {
  const apiCallString = `q=${query}&page=${page}`;
  try {
    let cachedData = cache.get(apiCallString);
    if (cachedData) {
      return {
        data: cachedData,
        ok: true,
        query: query,
      };
    }
    const res = await octokit.request("GET /search/users", {
      q: query,
      page,
      per_page: users_per_page,
    });

    cache.set(apiCallString, res.data.items);
    return {
      data: res.data.items,
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
