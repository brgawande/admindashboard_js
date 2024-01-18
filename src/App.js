import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import "./App.css";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {
  Calendar,
  ColorPicker,
  Customers,
  Ecommerce,
  Editor,
  Employee,
  Kanban,
  Orders,
  Area,
  Bar,
  ColorMapping,
  Financial,
  Line,
  Pie,
  Pyramid,
  Stacked,
} from "./pages";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  const activeMenu = true;
  return (
    <div className="border-2 border-[#ff0000]">
      <Router>
        <div className="border-2 border-black flex relative dark:bg-main-dark-bg">
          {/* setting icons starts */}
          <div
            className="border-2 border-black fixed bottom-4 right-4"
            style={{ zIndex: 1000 }}
          >
            <TooltipComponent content="Settings" position="top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "100%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/* setting icons ends */}

          {/* active menu sidebar starts */}
          {activeMenu ? (
            <div className="border-2 border-black w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="border-2 border-black w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          {/* active menu sidebar starts */}

          {/* navbar starts */}
          <div
            className={`border-2 border-black dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              // flex-2 is flex-grow property
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="flex md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </div>
          {/* navbar ends*/}

          {/* Routes starts */}
          <div className="border-2 border-black">
            <Routes>
              {/* dashboard */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employee />} />
              <Route path="/customers" element={<Customers />} />

              {/* apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
          {/* Routes ends */}
        </div>
      </Router>
    </div>
  );
}

export default App;
