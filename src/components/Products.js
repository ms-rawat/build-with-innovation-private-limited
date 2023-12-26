import React, { useEffect, useState } from 'react';
import Card from './Card';
import ScalatonLoader from './ScalatonLoader';
import Cart from './Cart';

function Products() {
  const [data, setData] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [sortOrder, setSortOrder] = useState('none');
  const [loading, setLoading] = useState(true);

  // Fetching Data
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        let res = await fetch('https://dummyjson.com/products');
        let result = await res.json();
        setData(result.products);
        setFilteredData(result.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  // Search and filter
  useEffect(() => {
    if (searchQuery.trim() !== '') {
      let filteredResult = data.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filteredResult);
    } else {
      setFilteredData(data);
    }
  }, [searchQuery, data]);

  // Sort
  useEffect(() => {
    if (sortOrder !== 'none') {
      let sortedResult = [...filteredData];
      if (sortOrder === 'high_to_low') {
        sortedResult.sort((a, b) => b.price - a.price); 
      } else if (sortOrder === 'low_to_high') {
        sortedResult.sort((a, b) => a.price - b.price); 
      }
      setFilteredData(sortedResult);
    }
  }, [sortOrder, filteredData]);

  return (
    <div>
      <div className='flex flex-row justify-end gap-3 my-5'>
        <div>
          <input
            className='border-2 placeholder-black placeholder:px-1 border-slate-700 rounded-md'
            type='text'
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder=' Search...'
          />
          <button onClick={() => setSearchQuery('')}>Reset</button>
        </div>
        <div>
          <select
            className='border-2 border-slate-700 rounded-md'
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value='none'>filter</option>
            <option value='low_to_high'>low to high</option>
            <option value='high_to_low'>high to low</option>
          </select>
        </div>
        <div>
          <Cart />
        </div>
      </div>
      <div className='flex flex-row flex-wrap gap-2 '>
        {loading ? (
          <ScalatonLoader />
        ) : filteredData.length > 0 ? (
          filteredData.map((item, index) => <Card key={index} data={item} />)
        ) : (
          <p>No matching products found.</p>
        )}
      </div>
    </div>
  );
}

export default Products;
