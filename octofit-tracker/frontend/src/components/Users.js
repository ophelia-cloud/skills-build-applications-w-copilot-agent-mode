import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;
    console.log('Fetching Users from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setUsers(results);
        setLoading(false);
        console.log('Fetched Users:', results);
      });
  }, []);

  if (loading) return <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>;

  return (
    <div className="card mt-3">
      <div className="card-header"><h2 className="display-6">Users</h2></div>
      <div className="card-body">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-warning">Invite User</button>
      </div>
    </div>
  );
};

export default Users;
