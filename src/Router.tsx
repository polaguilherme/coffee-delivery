import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./pages/Home";
import { CompleteOrder } from "./pages/CompleteOrder";
import { ConfirmedOrder } from "./pages/ConfirmedOrder";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/completeOrder" element={<CompleteOrder />}></Route>
        <Route path="/orderConfirmed" element={<ConfirmedOrder />}></Route>
      </Route>
    </Routes>
  );
}
