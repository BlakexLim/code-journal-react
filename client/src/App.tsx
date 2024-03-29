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
  const [entries, setEntries] = useState<Entry[]>([
    {
      entryId: 1,
      title: 'Hello',
      notes: 'test',
      photoUrl:
        'https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png',
    },
  ]);

  // useEffect(() => {
  //   setEntries(readEntries());
  // }, [setEntries]);

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
