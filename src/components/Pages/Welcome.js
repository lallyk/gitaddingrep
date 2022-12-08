import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1>Welcome To Expense Tracker</h1>
      <h1>Your profile is incomplete</h1>
      <h1>
        <nav>
          <Link to="/profile">Complete Now</Link>
        </nav>
      </h1>
    </div>
  );
};
export default Welcome;
