import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar, Footer, Sidebar } from "./components";
import {
  Login,
  Register,
  ApartForRent,
  ApartForRentAdd,
  ApartForRentEdit,
  Ecommerce,
  Calendar,
  Kanban,
} from "./pages";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";
import PrivateRoute from "./pages/PrivateRoute";
import Cookies from "js-cookie";

const App = () => {
  const {
    currentMode,
    activeMenu,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <>
            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
          </>

          <div
            style={{ overflowX: "hidden" }}
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full"
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2"
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              <Routes>
                {/* Authenication  */}
                <Route
                  path="/login"
                  element={
                    Cookies.get("jwt") !== undefined ? (
                      <Navigate to="/" />
                    ) : (
                      <Login />
                    )
                  }
                />
                <Route
                  path="/register"
                  element={
                    Cookies.get("jwt") !== undefined ? (
                      <Navigate to="/" />
                    ) : (
                      <Register />
                    )
                  }
                />
                {/*----------*/}

                {/* dashboard  */}
                <Route
                  element={
                    <PrivateRoute isLogged={Cookies.get("jwt") !== undefined} />
                  }
                >
                  {/* pages  */}
                  {/* Ecommerce  */}
                  <Route path="/" exact element={<Ecommerce />} />
                  <Route path="/data-report" element={<Ecommerce />} />
                  {/*----------*/}

                  {/* Apart For Rent  */}
                  <Route path="/apart-for-rent" element={<ApartForRent />} />
                  <Route
                    path="/apart-for-rent/add"
                    element={<ApartForRentAdd />}
                  />
                  <Route
                    path="/apart-for-rent/edit/:id"
                    element={<ApartForRentEdit />}
                  />
                  {/*----------*/}

                  {/* apps  */}
                  <Route path="/kanban" element={<Kanban />} />
                  <Route path="/calendar" element={<Calendar />} />
                  {/*----------*/}
                  {/*---------*/}
                </Route>
                <Route
                  path="*"
                  element={<Navigate to="/data-report" replace />}
                />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
