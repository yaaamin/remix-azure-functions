import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h1>My Items</h1>
      <Link to="/my-items/new">New Item</Link>
    </div>
  );
}
