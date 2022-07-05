
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Blogs } from './pages/Blogs';
import { Contact } from './pages/Contact';
import { Errors } from './pages/Errors';

import { Home } from './pages/Home';


function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Errors/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
