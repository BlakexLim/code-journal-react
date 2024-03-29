import { Link } from 'react-router-dom';
import { Entry, readEntries } from './Data/data';
import { FaPencil } from 'react-icons/fa6';

export function Entries() {
  const entries = readEntries();
  const entryComponents = entries.map((entry) => {
    return (
      <li key={entry.entryId}>
        <SingleEntry entry={entry} />
      </li>
    );
  });
  return (
    <>
      <div className="row row-entries">
        <h2 className="column-half">Entries</h2>
        <Link to="/form" className="form-link column-half">
          New
        </Link>
      </div>
      <ul className="entry-ul">{entryComponents}</ul>
    </>
  );
}

type EntryProp = {
  entry: Entry;
};

function SingleEntry({ entry }: EntryProp) {
  return (
    <>
      <div className="row">
        <div className="column-half">
          <img className="width-100" src={entry.photoUrl} alt={entry.title} />
        </div>
        <div className="column-half">
          <div className="row">
            <div className="column-full d-flex justify-between">
              <h2>{entry.title}</h2>
              <Link to={`form-edit/${entry.entryId}`}>
                <FaPencil />
              </Link>
            </div>
          </div>
          <p>{entry.notes}</p>
        </div>
      </div>
    </>
  );
}
