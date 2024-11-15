import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/components/views/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
