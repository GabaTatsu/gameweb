import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import NotFoundPage from "./components/NotFoundPage";
import BlockGamePage from "./pages/BlockGamePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/BlockGame" element={<BlockGamePage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
