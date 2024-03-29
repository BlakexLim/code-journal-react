import { Outlet, Link } from 'react-router-dom';

export function Header() {
  return (
    <>
      <div className="container row header">
        <h1>Code Journal</h1>
        <Link className="entries-link" to="/">
          Entries
        </Link>
      </div>
      <div className="container row body">
        <div className="column-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}
