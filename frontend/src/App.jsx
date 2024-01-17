import { Outlet, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHeader from "./components/AdminHeader";

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <>
      {isAdminRoute ? <AdminHeader /> : <Header />}
      <ToastContainer />
      <Container className="my-2">
        <Outlet />
      </Container>
    </>
  );
};

export default App;