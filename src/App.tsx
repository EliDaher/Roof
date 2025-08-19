
import { HashRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { routesConfig } from "./RoutesConfig";


const App = () => (
        <HashRouter>
          <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
            <Routes>
              {routesConfig.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Suspense>
        </HashRouter>
);

export default App;
