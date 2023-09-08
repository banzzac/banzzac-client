import { Link, Outlet } from "react-router-dom";

export const Navigator = () => {
  return (
    <div>
      <Outlet />
      <nav>
        <Link to={"profile"}>link</Link>
        <Link to={"chat"}>chat</Link>
        <Link to={"friends"}>friends</Link>
        <Link to={"feed"}>feed</Link>
        <Link to={"search"}>search</Link>
      </nav>
    </div>
  );
};
