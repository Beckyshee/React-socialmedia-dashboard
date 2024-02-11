import "./App.scss";
import Register from "./components/Register";
import FriendsPage from "./Pages/FriendsPage";
import Profile from "./Pages/Profile";
import Videos from "./Pages/Videos";
import GroupsPage from "./Pages/GroupsPage";
import EventsPage from './Pages/EventsPage';
import PhotosPage from "./Pages/PhotosPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NotificationsPage from "./Pages/NotificationsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/timeline" element={<Profile />} />
        <Route path="/friends" element={<FriendsPage />} />

        <Route path="/video" element={<Videos />} />
        <Route path="/photos" element={<PhotosPage />} />
        <Route path="/groups" element={<GroupsPage />} />
        <Route path="/events" element={<EventsPage />} />
        {/* <Route path="/notification" element={<NotificationsPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
