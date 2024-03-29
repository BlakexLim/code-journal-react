import { Link } from 'react-router-dom';
import { Entry } from './Data/data';

type Prop = {
  entries: Entry[];
};

export function Entries({ entries }: Prop) {
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
          <h2>{entry.title}</h2>
          <p>{entry.notes}</p>
        </div>
      </div>
    </>
  );
}
