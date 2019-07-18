import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Backend server API call.
    fetch('/assets/static', {
      headers: {'Accept': 'application/json'}
    }).then(res => res.json()).then(api => setProjects(api));
  }, []);
  
  const sortBy = useCallback(modifier => {
    let filtrate = [ ...projects ];

    const dataGroups = {
      '+budget': () => filtrate.sort((a, b) => a.budget - b.budget),
      '-budget': () => filtrate.sort((a, b) => b.budget - a.budget),
      '+start': () => filtrate.sort((a, b) => a.start - b.start),
      '-start': () => filtrate.sort((a, b) => b.start - a.start),
      '+end': () => filtrate.sort((a, b) => a.end - b.end),
      '-end': () => filtrate.sort((a, b) => b.end - a.end)
    }

    filtrate = dataGroups[modifier]();
    setProjects(filtrate);
  }, [projects]);

  return (
    <section className="app">
      <Header sortBy={sortBy} />
      <Grid projects={projects} />
    </section>
  );
}
