import React, { useContext } from 'react';
import Products from './components/Products';
import DataContext from './components/GlobleContext';

function Home() {

const {user}=useContext(DataContext)

  
  const cookie = document.cookie;

  if (!cookie) {
    document.location.assign('/');
  }

  return (
    <div>
       <header className='bg-slate-300 shadow-md ' >
           <div className=' text-slate-900 text-center text-3xl  font-serif h-14 py-3'> Shopping.com</div>
           { user? (<div className='text-end m-2'>Hello <h4 className='inline font-semibold text-lg'> "{user.username}"</h4></div>):(<div></div>) }
       </header>
      <Products  />
   
    </div>
  );
}

export default Home;
