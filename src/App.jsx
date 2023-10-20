
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import MasterLayout from './components/MasterLayout/MasterLayout';
import NotFound from './components/NotFound/NotFound';

function App() {
  let routes=createBrowserRouter([
  {path:"",element:<MasterLayout/> ,errorElement:<NotFound/>}
  ])
  return (
   <>
    <RouterProvider router={routes}></RouterProvider>
   </>
  );
}

export default App;
