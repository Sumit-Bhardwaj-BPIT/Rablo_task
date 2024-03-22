import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item, onDelete }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <Link to={`users/${item.id}`} className="block">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item.name}</div>
          <p className="text-gray-700 text-base mb-2">Username: {item.username}</p>
          <p className="text-gray-700 text-base mb-2">ID: {item.id}</p>
          <p className="text-gray-700 text-base mb-2">Email: {item.email}</p>
          <p className="text-gray-700 text-base mb-2">Phone: {item.phone}</p>
        </div>
      </Link>
      <div className="flex justify-between px-6 py-4">
        <button onClick={() => onDelete(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">Delete</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">Edit</button>
      </div>
    </div>
  );
}

export default Card;
