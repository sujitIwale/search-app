import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (query: string, page: number) => {
  const [Loading, setLoading] = useState(false);
  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=5&query=${query}`
      );
      setData(data.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("some thing went wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { Data, Loading, Error };
};

export default useFetch;
