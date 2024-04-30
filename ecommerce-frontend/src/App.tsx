import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Suspense, lazy } from "react";
import Loader from "./components/loader";
// lazy loading so that the pages are loaded when in that route and not all together  atonce in the beginning
const Home = lazy(()=> import("./pages/home"));
const Search = lazy(()=> import("./pages/search"));
const Cart = lazy(()=> import("./pages/cart"));

// admin routes
const Dashboard = lazy(() => import("./pages/admin/dashboard"));
const Products = lazy(() => import("./pages/admin/products"));
const Customers = lazy(() => import("./pages/admin/customers"));
const Transaction = lazy(() => import("./pages/admin/transaction"));
const Barcharts = lazy(() => import("./pages/admin/charts/barcharts"));
const Piecharts = lazy(() => import("./pages/admin/charts/piecharts"));
const Linecharts = lazy(() => import("./pages/admin/charts/linecharts"));
const Coupon = lazy(() => import("./pages/admin/apps/coupon"));
const Stopwatch = lazy(() => import("./pages/admin/apps/stopwatch"));
const Toss = lazy(() => import("./pages/admin/apps/toss"));
const NewProduct = lazy(() => import("./pages/admin/management/newproduct"));
const ProductManagement = lazy(
  () => import("./pages/admin/management/productmanagement")
);
const TransactionManagement = lazy(
  () => import("./pages/admin/management/transactionmanagement")
);

const App = () =>{
    return <Router>
        {/* header */}
        {/* suspense fallback so that while a page is loading and not yet loaded show loader */}
        <Suspense fallback={<Loader/>}> 
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/search" element={<Search/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>

                {/*  admin routes */}
                {/* protected route so that only admin can access it */}
                <Route
                //   element={
                //     <ProtectedRoute isAuthenticated={true} adminRoute={true} isAdmin={true} />
                //   }
                >
                  <Route path="/admin/dashboard" element={<Dashboard />} />
                  <Route path="/admin/product" element={<Products />} />
                  <Route path="/admin/customer" element={<Customers />} />
                  <Route path="/admin/transaction" element={<Transaction />} />
                  {/* Charts */}
                  <Route path="/admin/chart/bar" element={<Barcharts />} />
                  <Route path="/admin/chart/pie" element={<Piecharts />} />
                  <Route path="/admin/chart/line" element={<Linecharts />} />
                  {/* Apps */}
                  <Route path="/admin/app/coupon" element={<Coupon />} />
                  <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
                  <Route path="/admin/app/toss" element={<Toss />} />

                  {/* Management */}
                  <Route path="/admin/product/new" element={<NewProduct />} />

                  <Route path="/admin/product/:id" element={<ProductManagement />} />

                  <Route path="/admin/transaction/:id" element={<TransactionManagement />} />
                </Route>;
            </Routes>
        </Suspense>

    </Router>
}

export default App;