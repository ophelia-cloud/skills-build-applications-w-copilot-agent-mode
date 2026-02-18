import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;
    console.log('Fetching Workouts from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setWorkouts(results);
        setLoading(false);
        console.log('Fetched Workouts:', results);
      });
  }, []);

  if (loading) return <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>;

  return (
    <div className="card mt-3">
      <div className="card-header"><h2 className="display-6">Workouts</h2></div>
      <div className="card-body">
        <table className="table table-success">
          <thead>
            <tr>
              <th>Type</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, idx) => (
              <tr key={idx}>
                <td>{workout.type}</td>
                <td>{workout.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-danger">Log Workout</button>
      </div>
    </div>
  );
};

export default Workouts;
