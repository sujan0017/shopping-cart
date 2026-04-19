import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";

import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import MainLayout from "./layout/MainLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
