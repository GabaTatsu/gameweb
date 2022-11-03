import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import NotFoundPage from "./components/NotFoundPage";
import BlockGamePage from "./pages/BlockGamePage";
import SimonSaysPage from "./pages/SimonSaysPage";
import ShooterGame from "./components/ShooterGame";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/BlockGame" element={<BlockGamePage />} />
          <Route path="/SimonSays" element={<SimonSaysPage />} />
          <Route path="/ShooterGame" element={<ShooterGame />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
