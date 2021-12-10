import { BrowserRouter, Routes, Route } from "react-router-dom";

import Coin from "./routes/Coin";
import Home from "./routes/Home";
import Chart from "./routes/Chart";
import Price from "./routes/Price";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Coin />}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
