import React from "react";

interface AlbumItemProps {
    userId: number;
    id: number;
    title: string;
}

const AlbumItem: React.FC<AlbumItemProps> = ({ userId, id, title }) => {
    return (
        <div className="border p-2 mb-2 bg-white shadow-md rounded">
            <p><strong>User ID:</strong> {userId}</p>
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Title:</strong> {title}</p>
        </div>
    );
};

export default AlbumItem;