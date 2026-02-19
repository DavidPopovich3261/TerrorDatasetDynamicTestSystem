import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoadData from './pages/LoadData';
import { Providercontext } from "./Providercontext"
import DynamicTestPage from './pages/DynamicTestPage';


function App() {
  return (
    <Providercontext>
      <BrowserRouter>
        <Routes>
          <Route path='lodeData' element={<LoadData />} />
          <Route path='' element={<DynamicTestPage />} />
        </Routes>
      </BrowserRouter>
    </Providercontext>
  )
}

export default App