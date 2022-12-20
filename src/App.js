import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {
  Login, Register,
  Slider, SliderAdd,
  News, NewsAdd, NewsEdit,
  Project, ProjectAdd,
  ApartForRent, ApartForRentAdd, ApartForRentEdit,
  ApartForSell, ApartForSellAdd, ApartForSellEdit,
  ServiceApart, ServiceApartAdd, ServiceApartEdit,
  Further, FurtherAdd, FurtherEdit,
  Feature, FeatureAdd,
  Images, ImagesAdd,
  Ecommerce, Calendar, Kanban
} from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';
import PrivateRoute from './pages/PrivateRoute';


const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {localStorage.getItem('auth_token') === null ?
            "" :
            <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
              <TooltipComponent
                content="Settings"
                position="Top"
              >
                <button
                  type="button"
                  onClick={() => setThemeSettings(true)}
                  style={{ background: currentColor, borderRadius: '50%' }}
                  className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                >
                  <FiSettings />
                </button>

              </TooltipComponent>
            </div>
          }

          {localStorage.getItem('auth_token') === null ?
            "" : <> {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )} </>}

          <div style={{ overflowX: "hidden" }}
            className=
            {
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full'
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2'
            }
          >

            {localStorage.getItem('auth_token') !== null ?
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                <Navbar />
              </div> : ""}

            <div>
              {localStorage.getItem('auth_token') === null ?
                "" :
                <>
                  {themeSettings && (<ThemeSettings />)}
                </>}

              <Routes>
                {/* dashboard  */}
                {/* Authenication  */}
                <Route path="/login" element={localStorage.getItem('auth_token') !== null ? <Navigate to="/" /> : <Login />} />
                <Route path="/register" element={localStorage.getItem('auth_token') !== null ? <Navigate to="/" /> : <Register />} />
                {/*----------*/}
                <Route element={<PrivateRoute isLogged={localStorage.getItem('auth_token') !== null} />}>
                  {/* Ecommerce  */}
                  <Route path="*" element={<Ecommerce />} />
                  <Route path="/" exact element={<Ecommerce />} />
                  <Route path="/ecommerce" exact element={<Ecommerce />} />
                  {/*----------*/}

                  {/* pages  */}
                  {/* Slider  */}
                  <Route path="/slider" element={<Slider />} />
                  <Route path="/slider/add" element={<SliderAdd />} />
                  {/*----------*/}

                  {/* News  */}
                  <Route path="/news" element={<News />} />
                  <Route path="/news/add" element={<NewsAdd />} />
                  <Route path="/news/edit/:id" element={<NewsEdit />} />
                  {/*----------*/}

                  {/* Project */}
                  <Route path="/project" element={<Project />} />
                  <Route path="/project/add" element={<ProjectAdd />} />
                  {/*----------*/}

                  {/* Apart For Rent  */}
                  <Route path="/apartforrent" element={<ApartForRent />} />
                  <Route path="/apartforrent/add" element={<ApartForRentAdd />} />
                  <Route path="/apartforrent/edit/:id" element={<ApartForRentEdit />} />
                  {/*----------*/}

                  {/* Apart For Sell  */}
                  <Route path="/apartforsell" element={<ApartForSell />} />
                  <Route path="/apartforsell/add" element={<ApartForSellAdd />} />
                  <Route path="/apartforsell/edit/:id" element={<ApartForSellEdit />} />
                  {/*----------*/}

                  {/* Service Apartment  */}
                  <Route path="/serviceapart" element={<ServiceApart />} />
                  <Route path="/serviceapart/add" element={<ServiceApartAdd />} />
                  <Route path="/serviceapart/edit/:id" element={<ServiceApartEdit />} />
                  {/*----------*/}

                  {/* Further  */}
                  <Route path="/further/:id" element={<Further />} />
                  <Route path="/further/add/:id" element={<FurtherAdd />} />
                  <Route path="/further/edit/:id" element={<FurtherEdit />} />
                  {/*----------*/}

                  {/* Feature  */}
                  <Route path="/feature/:id" element={<Feature />} />
                  <Route path="/feature/add/:id" element={<FeatureAdd />} />
                  {/*----------*/}

                  {/* Images  */}
                  <Route path="/images/:id" element={<Images />} />
                  <Route path="/images/add/:id" element={<ImagesAdd />} />
                  {/*----------*/}

                  {/*---------*/}

                  {/* apps  */}
                  <Route path="/kanban" element={<Kanban />} />
                  <Route path="/calendar" element={<Calendar />} />
                </Route>

              </Routes>
            </div>

            {localStorage.getItem('auth_token') !== null ?
              <Footer /> : ""}
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
