import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useData } from '../Store/Context';

const ProtectedPage = ({ items }) => {
  const navigate = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem('auth-token')
    if(!token){
      navigate('/')
    }
  },[navigate])

  const [currentPage, setCurrentPage] = useState(1);
  const [departments, setDepartments] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/fetchDepartments');
        setDepartments(response.data); 
        console.log(response.data)
        localStorage.setItem('departments',JSON.stringify(response.data))
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    } 
    const savedDepartments = JSON.parse(localStorage.getItem('departments'));
    console.log(savedDepartments);
    if(savedDepartments){
      fetchDepartments()
    }else{
      setDepartments(savedDepartments)
    }
    const savedCheckedItems = JSON.parse(localStorage.getItem('checkedItems')) || {};
    setCheckedItems(savedCheckedItems);
  }, []);
  
  useEffect(() => localStorage.setItem('checkedItems', JSON.stringify(checkedItems)), [checkedItems]);
  // useEffect(() => localStorage.setItem('departments', JSON.stringify(departments)), [departments]);

  const totalPages = Math.ceil(departments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = departments.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  const handleCheckboxChange = (id) => {
    setCheckedItems(prevCheckedItems => ({
      ...prevCheckedItems,[id]: !prevCheckedItems[id]
    }));
  };

  const handleLogCheckedItems = () => {
    const checkedItemNames = Object.keys(checkedItems)
    .map(key => departments.find(department => department.id === parseInt(key)).name);
    console.log('Checked item names:', checkedItemNames);
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
    <div className="border border-gray-300 rounded-md text-black p-8 w-56 mx-auto">
      <h1 className="text-lg">Please mark your Interest</h1>
      <p className="text-xs">we Will keep You Notified</p>
      <p className='text-center 'style={{textAlign: "left", fontWeight: "600"}}>My saved Interest!</p>
      <ul className='pl-0' style={{paddingLeft: "0"}}>
        {displayedItems.map((department) => (
          <li style={{listStyle: "none", textAlign: "left"}} key={department.id}>
            <input
              type="checkbox"
              id={`item-${department.id}`}
              checked={checkedItems[department.id] || false}
              onChange={() => handleCheckboxChange(department.id)}
            />
            <label htmlFor={`item-${department.id}`}>{department.name}</label>
          </li>
        ))}
      </ul>
      <div className="pagination" style={{textAlign: "left"}}>
        <button className='b-0 text-black bg-white' onClick={() => handlePageChange(1)} disabled={currentPage === 1}>&lt;&lt;</button>
        <button className='b-0 text-black bg-white' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
        {getPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            style={{border: "0", color: "black", background: "white"}}
            onClick={() => handlePageChange(pageNumber)}
            className={currentPage === pageNumber ? 'active' : ''}
          >
            {pageNumber}
          </button>
        ))}
        <button className='b-0 text-black bg-white'onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>&gt;&gt;</button>
        <button className='b-0 text-black bg-white'onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>&gt;&gt;</button>
      </div>
      <button onClick={handleLogCheckedItems}>Log Checked Items</button>
    </div>
  );
};

export default ProtectedPage;
