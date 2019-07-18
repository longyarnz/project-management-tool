import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Static from './components/Static';
const raw = Static;

export default function App() {
  const [projects, setProjects] = useState(raw);
  
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
