import React, { useState } from "react";
import ModalContext from "./ModalContext";

export const ModalProvider = (props) => {
  const [state, setState] = useState({
    module: "Default",
  });

  const setModule = (module) => {
    setState((prev) => ({ ...prev, module }));
  };

  return (
    <ModalContext.Provider value={{ state, setModule }}>
      <h1>{`Active Module ${state.module}!`}</h1>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

//  <ModalContext.Provider
//       value={{
//         cars: state.cars,
//         incrementPrice: (selectedID) => {
//           const cars = Object.assign({}, state.cars);
//           cars[selectedID].price = cars[selectedID].price + 1;
//           setState({ cars });
//         },
//         decrementPrice: (selectedID) => {
//           const cars = Object.assign({}, state.cars);
//           cars[selectedID].price = cars[selectedID].price - 1;
//           setState({ cars });
//         },
//       }}
//     >
//       {props.children}
//     </ModalContext.Provider>
