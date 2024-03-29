import { Route, Routes } from 'react-router-dom';
import './layout.css';
import './reset.css';
import './styles.css';
import './App.css';
import { Header } from './Header';
import { Entries } from './Entries';
import { Form } from './Form';
import { NoPage } from './NoPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Entries />} />
          <Route path="form" element={<Form />} />
          <Route path="form-edit/:entryId" element={<Form />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
