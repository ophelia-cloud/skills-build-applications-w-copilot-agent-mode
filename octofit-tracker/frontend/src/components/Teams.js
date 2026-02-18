import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;
    console.log('Fetching Teams from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        setLoading(false);
        console.log('Fetched Teams:', results);
      });
  }, []);

  if (loading) return <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>;

  return (
    <div className="card mt-3">
      <div className="card-header"><h2 className="display-6">Teams</h2></div>
      <div className="card-body">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={idx}>
                <td>{team.name}</td>
                <td>{team.members && team.members.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-info">Create Team</button>
      </div>
    </div>
  );
};

export default Teams;
