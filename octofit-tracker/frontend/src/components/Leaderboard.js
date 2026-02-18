import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;
    console.log('Fetching Leaderboard from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setLeaders(results);
        setLoading(false);
        console.log('Fetched Leaderboard:', results);
      });
  }, []);

  if (loading) return <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>;

  return (
    <div className="card mt-3">
      <div className="card-header"><h2 className="display-6">Leaderboard</h2></div>
      <div className="card-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>User</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((leader, idx) => (
              <tr key={idx}>
                <td>{leader.user}</td>
                <td>{leader.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success">View Details</button>
      </div>
    </div>
  );
};

export default Leaderboard;
