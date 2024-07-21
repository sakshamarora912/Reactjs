import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useData } from '../Store/Context';

const ProtectedPage = ({ items }) => {
  const navigate = useNavigate()
  const {email} = useData();
  console.log(localStorage.getItem('auth-token'))

  useEffect(()=>{
    if(!email)
      navigate('/')
  },[])

  const [currentPage, setCurrentPage] = useState(1);
  const [departments, setDepartments] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchCheckedDepartments = async () => {
        try {
            const response = await axios.get('http://localhost:5000/fetchCheckedDepartments', {
                params: { email }
            });

            if (response.data && response.data.checkedDepartments) {
                setCheckedItems(response.data.checkedDepartments);
                localStorage.setItem('departments', JSON.stringify(response.data.checkedDepartments));
            } else {
                setCheckedItems([]);
                localStorage.setItem('departments', JSON.stringify([]));
            }
        } catch (error) {
            console.error('Error fetching departments:', error);
        }
    };

    fetchCheckedDepartments();
}, [email]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/fetchDepartments');
        setDepartments(response.data); 
        localStorage.setItem('departments', JSON.stringify(response.data));
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    } 
    fetchDepartments();

  }, []);
  
  const totalPages = Math.ceil(departments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = departments.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  const handleCheckboxChange = (id) => {
    setCheckedItems(prevCheckedItems => ({
      ...prevCheckedItems,[id]: !prevCheckedItems[id]
    }));
  };

  const handleLogCheckedItems = async() => {
    const checkedItemNames = Object.keys(checkedItems).map(key => departments.find(department => department.id === parseInt(key)).name);
    console.log('Checked item names:', checkedItemNames);

    try {
      const response = await axios.post('http://localhost:5000/sendCheckedDepartments', { email,checkedItems});
      console.log('Data sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const getPageNumbers = () => {
    const pagesToShow = 7;
    const pageNumbers = [];

    let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    let endPage = startPage + pagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - pagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) 
      pageNumbers.push(i)
    return pageNumbers;
  };

  return (
    <div className="w-[32em] my-0 mx-auto text-black" style={{ transform: 'scale(0.9)' }}>
     <div className="text-black rounded-lg p-8 border border-gray-300">
     <h1 className="text-lg">Please mark your Interest</h1>
      <p className="text-xs py-3">we Will keep You Notified</p>
      <p className='text-left font-bold py-4'>My saved Interest!</p>
      <ul className='pl-0'>
        {displayedItems.map((department) => (
          <li className='text-left list-none py-1' key={department.id}>
            <input
              type="checkbox"
              className='mr-4'
              id={`item-${department.id}`}
              checked={checkedItems[department.id] || false}
              onChange={() => handleCheckboxChange(department.id)}
            />
            <label htmlFor={`item-${department.id}`}>{department.name}</label>
          </li>
        ))}
      </ul>
      <div className='text-left py-8'>
        <button className='b-0 text-gray-400 bg-white m-2' onClick={() => handlePageChange(1)} disabled={currentPage === 1}>&lt;&lt;</button>
        <button className='b-0 text-gray-400 bg-white m-2' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
        {getPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            style={{border: "0", color: "black", background: "white",margin:".5em",color:"gray"}}
            onClick={() => handlePageChange(pageNumber)}
            className={currentPage === pageNumber ? 'text-black' : ''}
          >
            {pageNumber}
          </button>
        ))}
        <button className='b-0 text-gray-400 bg-white m-2'onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>&gt;</button>
        <button className='b-0 text-gray-400 bg-white m-2'onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>&gt;&gt;</button>
      </div>
      <button onClick={handleLogCheckedItems}>Log Checked Items</button>
     </div>
    </div>
  );
};

export default ProtectedPage;
