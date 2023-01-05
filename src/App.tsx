import React from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { GlobalStyle } from "./style/global";
import { RoutesComponent } from "./routes/";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <RoutesComponent />
    </>
  );
}

export default App;
