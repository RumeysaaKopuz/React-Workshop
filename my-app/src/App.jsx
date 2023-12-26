import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/Homepage";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Detail from "./pages/Detail";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setData(response.data);
        //console.log(data)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage data={data} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:productId" element={<Detail data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
