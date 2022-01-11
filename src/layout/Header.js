import React, { useContext } from "react";
import ModalContext from "../context/ModalContext";

export const Header = () => {
  const modules = useContext(ModalContext);

  //update module
  const moduleHandler = (data) => {
    modules.setModule(data);
  };

  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <button onClick={(e) => moduleHandler("Invoices")} style={styles.button}>
        Invoices
      </button>
      <button onClick={(e) => moduleHandler("Expenses")} style={styles.button}>
        Expenses
      </button>
      <button
        onClick={(e) => moduleHandler("SupplyChain")}
        style={styles.button}
      >
        SupplyChain
      </button>
    </nav>
  );
};
export default Header;

const styles = {
  button: {
    cursor: "pointer",
    background: "#333",
    border: "none",
    padding: "8px 15px",
    color: "#fff",
    marginLeft: "5px",
  },
};
