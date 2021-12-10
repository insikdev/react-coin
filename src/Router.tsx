import { BrowserRouter, Routes, Route } from "react-router-dom";

import Coin from "./routes/Coin";
import Home from "./routes/Home";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
