import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './Routes/routes';
import './App.css';
import Sidebar from './Layouts/Sidebar/Sidebar';
import Header from './Layouts/Header/Header';
import Footer from './Layouts/Footer/Footer';

function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Routes>
                    {publicRoutes.map((item, index) => {
                        if (item.layout === null) {
                            return <Route key={index} path={item.path} element={item.component} />;
                        }
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={
                                    <>
                                        <Sidebar />
                                        <div className="main-panel">
                                            <Header />
                                            <div className="container">
                                                <div className="page-inner">{item.component}</div>
                                            </div>
                                            <Footer />
                                        </div>
                                    </>
                                }
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
