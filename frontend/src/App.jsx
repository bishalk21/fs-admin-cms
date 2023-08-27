import "./App.css";
import ProductManagement from "./pages/product/ProductManagement";
import CategoryManagement from "./pages/category/CategoryManagement";

function App() {
  return (
    <div className="h-full max-w-full flex flex-col gap-4 items-center justify-center p-10">
      <div className="category w-full">
        <h1 className="font-bold text-2xl text-blue-600">
          Category Management
        </h1>
        <CategoryManagement />
      </div>

      <hr className="border w-full border-black" />

      <div className="product w-full">
        <h1 className="font-bold text-2xl text-blue-600">Product Management</h1>
        <ProductManagement />
      </div>
    </div>
  );
}

export default App;
