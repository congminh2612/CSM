import { Route, Routes } from "react-router-dom";
import UserScreen from "./features/UserScreen";
import ProductsScreen from "./features/ProductsScreen";
import OverViewScreen from "./features/OverViewScreen";
import DashBoard from "./features/DashBoard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/product" element={<ProductsScreen />} />
      <Route path="/overview" element={<OverViewScreen />} />
    </Routes>
  );
}

export default App;
