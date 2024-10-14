import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import AllBlogs from "./pages/allBlogs/AllBlogs";
import Normal from "./pages/Catagory/normal/normal";
import Normal1 from "./pages/Catagory/normal/1";
import Normal2 from "./pages/Catagory/normal/2";
import Normal3 from "./pages/Catagory/normal/3";
import Nahpage from "./pages/nopage/Nopage";
import BlogInfo from "./pages/blogInfo/BlogInfo";
import AdminLogin from "./pages/admin/adminLogin/AdminLogin";
import AdminRegister from "./pages/admin/adminRegister/AdminRegister"; // Import the register page
import Dashboard from "./pages/admin/dashboard/Dashboard";
import MyState from "./context/data/myState";
import CreateBlog from "./pages/admin/createBlog/createBlog";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminregister" element={<AdminRegister />} />{" "}
          {/* เพิ่ม route สำหรับการลงทะเบียน */}
          <Route path="/normal" element={<Normal />} />
          <Route path="/normal/1" element={<Normal1 />} />
          <Route path="/normal/2" element={<Normal2 />} />
          <Route path="/normal/3" element={<Normal3 />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRouteForAdmin>
                <Dashboard />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/createblog"
            element={
              <ProtectedRouteForAdmin>
                <CreateBlog />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="/nahpage" element={<Nahpage />} />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
}

export default App;

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  if (admin?.user?.email === "testuser@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/adminlogin"} />;
  }
};
