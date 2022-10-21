import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import {
  ErrorPage,
  RootLayout,
  Home,
  Cart,
  SingleProduct,
  WishList,
  Product,
  About,
  Contact,
} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/products" element={<Product />} />
      <Route path="/products/:id" element={<SingleProduct />} />
    </Route>
  )
);
function App() {
  return (
    <div className="App font-base">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
