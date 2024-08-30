import Navbar from './componennts/Navabar';
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider, Link  } from "react-router-dom";
import Buy from './routes/Buy';
import Sell from './routes/Sell';
import About from './routes/About';
import Kobelco from './pages/Kobelco';
import Loan from './routes/Loan';
import LoanForm from './routes/LoanForm';
import { FaWhatsapp } from 'react-icons/fa';
import { useEffect } from 'react';
import BuyCategories from './componennts/BuyCategories';
import Home from './componennts/Home';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <Root /> }>
        <Route path='/about' element={ < About /> }/>
        <Route path='/' element={ < Home  /> }/>
        <Route path='/buy'>
          <Route path='/buy' element={ < Buy /> }/>
          <Route path='/buy/equipments/:category' element={ < BuyCategories /> }/>
          <Route path='/buy/equipments/:category/:make' element={ < BuyCategories /> }/>
          <Route path='/buy/Kobelco' element={ < Kobelco /> }/>
        </Route>
        <Route path='/sell' element={ < Sell /> }/>
        <Route path='/loan' element={ < Loan /> }/>
        <Route path='/loan-form' element={ < LoanForm /> }/>
      </Route>
    )
  )
  return (
    <div>
        <RouterProvider router={router} />  
    </div>
  )
}
const Root = () => {
  return <div className='relative'>
    <Navbar />
    <Outlet />
    <div className='fixed inline-block p-2 rounded-full bg-eYellow bottom-4 right-4 '>
      <Link to="https://wa.me/+2347026701092" target="_blank">
        <FaWhatsapp className='text-4xl cursor-pointer bg-eYellow' />
      </Link>
    </div>
  </div>
}

export default App
