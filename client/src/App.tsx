import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './layout.css';
import './reset.css';
import './styles.css';
import './App.css';
import { Header } from './Header';
import { Entries } from './Entries';
import { Form } from './Form';
import { NoPage } from './NoPage';
import { type Entry, readEntries } from './Data/data';

function App() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const entriesArray = readEntries();
  useEffect(() => {
    setEntries(entriesArray);
  }, [entriesArray]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Entries entries={entries} />} />
          <Route path="form" element={<Form />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
