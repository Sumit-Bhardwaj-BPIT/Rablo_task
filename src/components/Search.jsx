import React, { useState } from 'react';
import Display from './Display';

const Search = ({ fetchData, dataf, setDataf }) => {
  const [val, setVal] = useState("");

  const handleSearch = () => {
    if (val) {
      const newArr = dataf.filter(d => d.id == val);
      setDataf(newArr);
    } else {
      fetchData();
    }
  }

  return (
    <div className="mt-8">
      <p className="text-lg text-center mb-4">Search for users by their ID and Click on Cards to get Info in Detail</p>
      <div className="flex justify-center">
        <input className="border border-gray-300 rounded py-2 px-4 mr-2" type="text" placeholder='Enter ID' value={val} onChange={(e) => setVal(e.target.value)} />
        <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">Search</button>
      </div>

      {!val.length ? (
        <Display dataf={dataf} setDataf={setDataf} />
      ) : (
        <Display dataf={dataf.filter(d => d.id == val)} setDataf={setDataf} />
      )}
    </div>
  );
}

export default Search;
