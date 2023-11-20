import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar, Footer, Sidebar, Notification } from "./components";
import { Login, Ecommerce, Calendar, Kanban } from "./pages";

import {
  ApartForRent,
  ApartForRentAdd,
  ApartForRentEdit,
  ApartForRentDetails,
} from "./pages/ApartForRent";

import { ApartAdding } from "./pages/ApartAdding";

import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";
import * as ROUTES from "./constants/routes";

import { isTokenNotExpired, getTimeReload } from "./hooks/useAuth";

const App = () => {
  const { currentMode, activeMenu } = useStateContext();

  const userProfile = JSON.parse(localStorage.getItem("user"));

  const token = userProfile ? userProfile.accessToken : "";

  const isNotExpire = userProfile ? isTokenNotExpired(token) : false;

  const isAllowLogin = isNotExpire && token !== "";

  const timeReload = getTimeReload(token);

  if (isAllowLogin) {
    setTimeout(() => {
      window.location.reload();
    }, timeReload);

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
                  {/* dashboard  */}
                  <Route>
                    {/* pages  */}
                    <Route
                      path={ROUTES.DEFAULT}
                      exact
                      element={<Ecommerce />}
                    />
                    <Route path={ROUTES.DATA_REPORT} element={<Ecommerce />} />
                    {/*----------*/}

                    {/* Apart For Rent  */}
                    <Route
                      path={ROUTES.APART_ADDING}
                      element={<ApartAdding />}
                    />
                    {/*----------*/}

                    {/* Apart For Rent  */}
                    <Route
                      path={ROUTES.APART_FOR_RENT}
                      element={<ApartForRent />}
                    />
                    <Route
                      path={ROUTES.APART_FOR_RENT_ADD}
                      element={<ApartForRentAdd />}
                    />
                    <Route
                      path={ROUTES.APART_FOR_RENT_EDIT}
                      element={<ApartForRentEdit />}
                    />
                    <Route
                      path={ROUTES.APART_FOR_RENT_DETAILS}
                      element={<ApartForRentDetails />}
                    />
                    {/*----------*/}

                    {/* apps  */}
                    <Route path={ROUTES.KANBAN} element={<Kanban />} />
                    <Route path={ROUTES.CALENDAR} element={<Calendar />} />
                    {/*----------*/}

                    {/*---------*/}
                  </Route>
                  <Route
                    path="*"
                    element={<Navigate to={ROUTES.DATA_REPORT} replace />}
                  />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
        <Notification />
      </div>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          {/* Authenication  */}
          <Route path={ROUTES.LOGIN} element={<Login />} />
          {/*----------*/}
          <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
        </Routes>
        <Notification />
      </BrowserRouter>
    );
  }
};

export default App;
