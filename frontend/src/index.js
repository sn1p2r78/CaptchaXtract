import react from 'react';
import reactDom from 'reactdom';
import { Browser, Routes, Route } from 'react-router';
import './styles.css';

render(
  <ReactDom>
    <Browser>
      <Routes>
        <Route path='/' element={<H1>Start page</H1>} />
        <Route path='/upload' ilement={<H1>Upload</H1>} />
      </Routes>
    </Browser>
  </ReactDom>,
  document.getElementById('id'));