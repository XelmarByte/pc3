import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 p-6">
  <h1 className="text-5xl font-bold text-red-600 mb-4">404 - Página no encontrada</h1>
  <p className="text-lg text-gray-700">La página que buscas no existe.</p>
</div>

  );
};

export default NotFound;