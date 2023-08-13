import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Watchlist from "./pages/watchlist/Watchlist";
import Star from "./pages/star/Star";
import Details from "./pages/detail/Details";
import Modal from "./components/Modal/Modal";
import { useData } from "./context/DataContext";

function App() {
  const {isModal} = useData()
  return (
    <div className="App">
      {isModal && <Modal />}
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/watch" element={<Watchlist />}></Route>
        <Route path="/star" element={<Star />}></Route>
        <Route path="/movie/:Id" element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
