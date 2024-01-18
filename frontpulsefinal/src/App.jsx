import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import MainLayout from "./Layouts/MainLayout";
import AddPage from "./Pages/AddPage";
import Detail from "./Pages/DetailPage";
import WishList from "./Pages/WishList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/AddPage" element={<AddPage />} />
          <Route path="/DetailPage/:id" element={<Detail />} />
          <Route path="/WishList" element={<WishList />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
