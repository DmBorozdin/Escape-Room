import { APPRoute } from "const";
import { Link } from "react-router-dom";

const NotFoundScreen = () => (
  <div className="user-page">
      <div className="user-page__content">
        <h1>404. Page not found</h1>
        <Link to={APPRoute.MAIN}>Go to the home page</Link>
      </div>

  </div>
);

export default NotFoundScreen;
