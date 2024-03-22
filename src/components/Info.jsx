import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Info = () => {
    const { id } = useParams();
    const API_URL = 'https://jsonplaceholder.typicode.com/users';
    const [item, setItem] = useState(null);

    const fetchData = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        const user = data.find(user => user.id === parseInt(id));
        setItem(user);
    }

    useEffect(() => {
        fetchData();
    }, [id]);

    if (!item) {
        return <div className="flex items-center justify-center h-screen text-white bg-gradient-to-b from-blue-500 to-purple-500">Loading...</div>;
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-purple-500">
            <div className="bg-white shadow-md p-8 rounded-lg max-w-4xl w-full animate__animated animate__fadeIn">
                <h2 className="text-3xl font-bold text-blue-600 mb-4">{item.name}</h2>
                <p className="text-lg text-gray-700 mb-2">Username: {item.username}</p>
                <p className="text-lg text-gray-700 mb-2">ID: {item.id}</p>
                <p className="text-lg text-gray-700 mb-2">Email: {item.email}</p>
                <p className="text-lg text-gray-700 mb-2">Phone: {item.phone}</p>
                <p className="text-lg text-gray-700 mb-2">Website: {item.website}</p>
                <div className="mt-4">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">Address</h3>
                    <p>Street: {item.address.street}</p>
                    <p>Suite: {item.address.suite}</p>
                    <p>City: {item.address.city}</p>
                    <p>Zipcode: {item.address.zipcode}</p>
                </div>
                <div className="mt-4">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">Company</h3>
                    <p>Name: {item.company.name}</p>
                    <p>Catch Phrase: {item.company.catchPhrase}</p>
                    <p>BS: {item.company.bs}</p>
                </div>
            </div>
        </div>
    );
}

export default Info;
