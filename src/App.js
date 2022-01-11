import React, { lazy, Suspense, useContext } from "react";
import ModalContext from "./context/ModalContext";
import Header from "./layout/Header";

const App = () => {
  const {
    state: { module },
  } = useContext(ModalContext);

  const AvatarComponent = lazy(() => import(`./module/${module}`));
  return (
    <>
      <h1>Bookkeeper!</h1>
      <Header />
      <Suspense fallback={<div> Loading...</div>}>
        <AvatarComponent />
      </Suspense>
    </>
  );
};

export default App;
