import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import ProfileDetails from "./ProfileDetails";

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Router>
      <div>
        {error && <div>Error: {error}</div>}
        <Switch>
          <Route path="/" exact>
            <HomePage users={users} />
          </Route>
          <Route path="/profile/:id">
            <ProfileDetails users={users} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
