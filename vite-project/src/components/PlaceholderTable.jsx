import React, { useContext } from "react";
import { GlobalContext } from "../App";

const PlaceholderTable = () => {
  const { data } = useContext(GlobalContext);
  console.log("data", data);

  return <div>PlaceholderTable</div>;
};

export default PlaceholderTable;
