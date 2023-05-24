import { useEffect, useState } from "react";
import { makeReq } from "../makeReq";
import axios from "axios";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const res = await makeReq.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetch();
  }, [url]);
  const refetch = async () => {
    console.log(url);
    setLoading(true);
    try {
      const res = await makeReq.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, refetch };
};

export default useFetch;
