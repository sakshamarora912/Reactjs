import React, { useState, useEffect } from 'react';

const MediumTask = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=5&page=${page}&order=Desc`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const result = await response.json();
        setData(result); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handlePage = (direction) => setPage((prev) => prev + direction);

  return (
    <>
      <div className="p-4">
        <h1>TASK 2 : EASY</h1>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && data.length === 0 && <p>No Data Available</p>}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {data.map((e) => (
            <div key={e.id} className="border rounded-lg overflow-hidden">
              <img src={e.url} alt={e.id} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => handlePage(-1)}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button onClick={() => handlePage(1)} className="px-4 py-2 bg-blue-300 text-white rounded">
          Next
        </button>
      </div>
    </>
  );
};

export default MediumTask;
