import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar, Footer, Sidebar, Notification } from "./components";
import { Login, Ecommerce, Calendar, Kanban } from "./pages";

import {
  ApartForRent,
  ApartForRentAdd,
  ApartForRentEdit,
  ApartForRentDetails,
} from "./pages/ApartForRent";

import {
  ApartForSell,
  ApartForSellAdd,
  ApartForSellDetails,
  ApartForSellEdit,
} from "./pages/ApartForSell";

import {
  ApartUnderConstruction,
  ApartUnderConstructionAdd,
  ApartUnderConstructionDetails,
  ApartUnderConstructionEdit,
} from "./pages/ApartUnderConstruction";

import {
  ApartManagement,
  ApartManagementAdd,
  ApartManagementDetails,
  ApartManagementEdit,
} from "./pages/ApartManagement";

import {
  ApartRentedNoTax,
  ApartRentedNoTaxAdd,
  ApartRentedNoTaxDetails,
  ApartRentedNoTaxEdit,
  ApartRentedNoTaxArea,
} from "./pages/ApartRentedNoTax";

import {
  UserManagement,
  UserManagementAdd,
  UserManagementList
} from "./pages/User";

import { ApartAdding } from "./pages/ApartAdding";

import { useState } from "react";

import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";
import * as ROUTES from "./constants/routes";

import useAuth from "./hooks/useAuth";

const App = () => {
  const { currentMode, activeMenu } = useStateContext();

  const { isTokenNotExpired } = useAuth();

  const userProfile = JSON.parse(localStorage.getItem("user"));

  const token = userProfile?.accessToken;

  const isLogin = userProfile ? isTokenNotExpired(token) : false;

  const [isReload, setIsReload] = useState(false);

  if (isLogin) {
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
                <Navbar setIsReload={setIsReload} isReload={isReload} />
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

                    {/* Apartment Adding  */}
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

                    {/* Apart For Sell  */}
                    <Route
                      path={ROUTES.APART_FOR_SELL}
                      element={<ApartForSell />}
                    />
                    <Route
                      path={ROUTES.APART_FOR_SELL_ADD}
                      element={<ApartForSellAdd />}
                    />
                    <Route
                      path={ROUTES.APART_FOR_SELL_DETAILS}
                      element={<ApartForSellDetails />}
                    />
                    <Route
                      path={ROUTES.APART_FOR_SELL_EDIT}
                      element={<ApartForSellEdit />}
                    />
                    {/*----------*/}

                    {/* Apart Under Construction  */}
                    <Route
                      path={ROUTES.APART_UNDER_CONSTRUCTION}
                      element={<ApartUnderConstruction />}
                    />
                    <Route
                      path={ROUTES.APART_UNDER_CONSTRUCTION_ADD}
                      element={<ApartUnderConstructionAdd />}
                    />
                    <Route
                      path={ROUTES.APART_UNDER_CONSTRUCTION_DETAILS}
                      element={<ApartUnderConstructionDetails />}
                    />
                    <Route
                      path={ROUTES.APART_UNDER_CONSTRUCTION_EDIT}
                      element={<ApartUnderConstructionEdit />}
                    />
                    {/*----------*/}

                    {/* Apart For Sell  */}
                    <Route
                      path={ROUTES.APART_MANAGEMENT}
                      element={<ApartManagement />}
                    />
                    <Route
                      path={ROUTES.APART_MANAGEMENT_ADD}
                      element={<ApartManagementAdd />}
                    />
                    <Route
                      path={ROUTES.APART_MANAGEMENT_DETAILS}
                      element={<ApartManagementDetails />}
                    />
                    <Route
                      path={ROUTES.APART_MANAGEMENT_EDIT}
                      element={<ApartManagementEdit />}
                    />
                    {/*----------*/}

                    {/* Apart Rented No Tax  */}
                    <Route
                      path={ROUTES.APART_RENTED_NO_TAX}
                      element={<ApartRentedNoTax />}
                    />
                    <Route
                      path={ROUTES.APART_RENTED_NO_TAX_ADD}
                      element={<ApartRentedNoTaxAdd />}
                    />
                    <Route
                      path={ROUTES.APART_RENTED_NO_TAX_DETAILS}
                      element={<ApartRentedNoTaxDetails />}
                    />
                    <Route
                      path={ROUTES.APART_RENTED_NO_TAX_EDIT}
                      element={<ApartRentedNoTaxEdit />}
                    />

                    <Route
                      path={ROUTES.APART_RENTED_NO_TAX_AREA}
                      element={<ApartRentedNoTaxArea />}
                    />
                    {/*----------*/}

                    {/* User  */}
                    <Route path={ROUTES.USER_MANAGEMENT} element={<UserManagement />} />
                    <Route path={ROUTES.USER_ADDING} element={<UserManagementAdd />} />
                    <Route path={ROUTES.USER_LIST} element={<UserManagementList />} />
                    {/*----------*/}

                    {/* Apps  */}
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
          <Route
            path={ROUTES.LOGIN}
            element={<Login setIsReload={setIsReload} isReload={isReload} />}
          />
          {/*----------*/}
          <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
        </Routes>
        <Notification />
      </BrowserRouter>
    );
  }
};

export default App;
