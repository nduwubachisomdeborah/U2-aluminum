// import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Homepage from "./pages/Homepage";

// function App() {
//   return;
//   <div>
//     <Routes>
//       <Route path="/" element={<Homepage />} />
//     </Routes>
//   </div>;
// }

// export default App;
// import React, { useEffect } from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import { useEffect } from "react";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/About uspage/Aboutus";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
