import { useState, useEffect } from "react";
import './App.css';
import Search from "./components/Search";
import { Outlet } from "react-router-dom";

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/users';
  const [dataf, setDataf] = useState([]);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const res = await data.json();
    setDataf(res);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">User Data</h1>
      <Search fetchData={fetchData} dataf={dataf} setDataf={setDataf} />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
