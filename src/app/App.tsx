import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { MediaPage } from "./components/MediaPage";
import { EventsPage } from "./components/EventsPage";

{/* MARKER-MAKE-KIT-INVOKED */}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
