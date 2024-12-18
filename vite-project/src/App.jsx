import React, { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import PlaceholderTable from "./components/PlaceholderTable";
export const GlobalContext = createContext();
const App = () => {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState("hamza");
  const ChangeData = (val) => {
    setTitle(val);
  };
  const ApiCall = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const apiData = await response.json();
      setData(apiData);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        data,
        title,
        url: "hamzamanzoor.me",
        setData,
        ChangeData,
        ApiCall,
      }}
    >
      <Navbar />
      <PlaceholderTable />
    </GlobalContext.Provider>
  );
};

export default App;
