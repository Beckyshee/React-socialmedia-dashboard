import "./App.scss";
import Register from "./components/Register";
import FriendsPage from "./Pages/FriendsPage";
import Timeline from "./Pages/Timeline";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/friends" element={<FriendsPage />} />
        {/* <Route path="/groups" element={<Timeline />} />
        <Route path="/videos" element={<Timeline />} />
        <Route path="/photos" element={<Timeline />} /> 
        <Route path="/events" element={<events />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
