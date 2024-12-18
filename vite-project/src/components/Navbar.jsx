import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../App";

const Navbar = () => {
  const { title, url, ChangeData, ApiCall } = useContext(GlobalContext);
  useEffect(() => {
    ApiCall();
  }, []);

  return (
    <nav>
      <a href={url}>{title}</a>
      <button onClick={() => ChangeData("Ali Raza")}>Click me</button>
    </nav>
  );
};

export default Navbar;
