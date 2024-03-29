import { Entry } from './Data/data';

type Prop = {
  entries: Entry[];
};

export function Entries({ entries }: Prop) {
  const entryComponents = entries.map((entry) => {
    return (
      <div key={entry.entryId}>
        <SingleEntry entry={entry} />
      </div>
    );
  });
  return <>{entryComponents}</>;
}

type EntryProp = {
  entry: Entry;
};

function SingleEntry({ entry }: EntryProp) {
  return (
    <>
      <div className="row">
        <div className="column-half">
          <img src={entry.photoUrl} alt={entry.title} />
        </div>
        <div className="column-half">
          <h2>{entry.title}</h2>
          <p>{entry.notes}</p>
        </div>
      </div>
    </>
  );
}
