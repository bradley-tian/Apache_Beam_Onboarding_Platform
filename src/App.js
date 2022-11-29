import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoaderPage from './pages/LoaderPage';
import TransformPage from './pages/TransformPage';
import RunnerPage from './pages/RunnerPage';
import GetStartedPage from './pages/GetStarted';
import QuickStartPage from './pages/QuickStartPage';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<GetStartedPage />}/>
          <Route path='/quickstart' element={<QuickStartPage />}/>
          <Route path='/loader' element={<LoaderPage />}/>
          <Route path='/transform' element={<TransformPage />}/>
          <Route path='/runner' element={<RunnerPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
