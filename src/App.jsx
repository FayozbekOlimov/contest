import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DataProvider from "./context/DataProvider";
import Home from "./pages/Home";

function App() {
  return (
    <DataProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </DataProvider>
  );
}

export default App;
