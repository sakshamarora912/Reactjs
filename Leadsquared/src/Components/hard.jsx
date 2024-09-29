import React, { useState, useEffect } from 'react';

const HardTask = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchData = async (page) => {
    setLoading(true);
    try {
      console.log('Fetching data for page:', page); 
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=5&page=${page}&order=Desc`);
      const result = await response.json();

      if (result.length === 0) {
        setHasMore(false);
      } else {
        setData((prevData) => [...prevData, ...result]); 
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 10) {
      console.log('Near bottom of the page'); 
      if (hasMore && !loading) {
        setPage((prevPage) => prevPage + 1); 
      }
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, loading]);

  return (
    <div>
      {loading && <p>Loading more...</p>}
      {!hasMore && <p>No more data available</p>}
      <h1>TASK 3 : HARD</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {data.map((e) => (
          <div key={e.id} className="border rounded-lg overflow-hidden">
            <img src={e.url} alt={e.id} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HardTask;
