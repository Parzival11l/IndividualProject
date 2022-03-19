import React from "react";
import {Route, Redirect, useRoutes} from 'react-router-dom' 
import{authRoutes, publicRoutes} from "../Routes";
import {Routes} from 'react-router-dom';
import { HOME_ROUTE } from "../utils/consts";
import Auth from "../page/Auth";
import Test from "../page/Test";
import Personal from "../page/Personal";


const AppRouter = () => {
    const isAuth = false;
         const routes = <Routes><Route exact path="/" element={<Auth />}/>
         <Route exact path="/test" element={<Test />}/>
         <Route exact path="/person" element={<Personal />}/>
         <Route exact path="/test" element={<Test />}/>
         <Route exact path="/test" element={<Test />}/>
         {isAuth && authRoutes.map(({path, Component}) =>
           <Route key={path} path={path} element={Component} exact/>
             )}
              { publicRoutes.map(({path, Component}) =>
            <Route exact key={path} path={path} element={Component}/>
             )}; 
            </Routes>
          
    return routes;
};

export default AppRouter;