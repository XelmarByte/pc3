import React, { useEffect, useState } from "react";

interface Album {
    userId: number;
    id: number;
    title: string;
}

const Albums: React.FC = () => {
    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then((response) => response.json())
            .then((data) => setAlbums(data))
            .catch((error) => console.error("Error fetching albums:", error));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Albums</h1>
            <p className="text-lg text-gray-600">Lista de los albunes:</p>
            <ul className="mt-4 text-left w-full max-w-lg">
                {albums.map((album) => (
                    <li key={album.id} className="border p-2 mb-2 bg-white shadow-md rounded">
                        <p><strong>User ID:</strong> {album.userId}</p>
                        <p><strong>ID:</strong> {album.id}</p>
                        <p><strong>Title:</strong> {album.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Albums;
