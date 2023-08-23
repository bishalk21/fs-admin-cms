import AddNewProductForm from "./AddNewProductForm";
import "./App.css";
import CategoryTable from "./pages/category/components/CategoryTable";
import CategoryForm from "./pages/category/components/CategoryForm";

function App() {
  return (
    <div className="h-screen max-w-4xl flex flex-col gap-4 items-start justify-center p-10">
      <div className="category  w-full">
        <h1 className="font-bold text-2xl text-blue-600">
          Category Management
        </h1>
        <CategoryForm />
        <CategoryTable />
      </div>

      <div className="product">
        <h1 className="font-bold text-2xl text-blue-600">Product Management</h1>
        <AddNewProductForm />
      </div>
    </div>
  );
}

export default App;
