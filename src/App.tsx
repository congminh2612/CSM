import { Route, Routes } from "react-router-dom";
import UserScreen from "./features/UserScreen";
import ProductsScreen from "./features/ProductsScreen";
import OverViewScreen from "./features/OverViewScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserScreen />} />
      <Route path="/product" element={<ProductsScreen />} />
      <Route path="/overview" element={<OverViewScreen />} />
    </Routes>
  );
}

export default App;
