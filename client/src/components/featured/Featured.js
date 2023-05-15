import React from "react";
import useFetch from "../../hock/useFetch";
const Featured = () => {
  const { data, loading, error } = useFetch("/user");
  console.log(data);
  return <div>Featured</div>;
};

export default Featured;
