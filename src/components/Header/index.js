import React, { useState } from 'react';

export function IconButton(props) {
  const icon = props.icon || (props.status ? 'arrow_back_ios' : 'arrow_forward_ios');
  const activeFilter = props.active ? 'selected' : null;
  
  return (
    <button className={activeFilter} onClick={props.onClick}>
      <span>{props.text}</span>
      <i>{icon}</i>
    </button>
  )
}

function TabList({ sortBy }) {
  const [budget, setBudget] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [active, setActive] = useState([null,null, null]);

  const sortByBudget = () => {
    budget ? sortBy('-budget') : sortBy('+budget');
    setBudget(!budget);
    setActive([true, false, false])
  }
  
  const sortByStart = () => {
    start ? sortBy('-start') : sortBy('+start');
    setStart(!start);
    setActive([false, true, false])
  }
  
  const sortByEnd = () => {
    end ? sortBy('-end') : sortBy('+end');
    setEnd(!end);
    setActive([false, false, true])
  }

  return (
    <div>
      <span>Sort by:</span>
      <IconButton active={active[0]} status={budget} onClick={sortByBudget} text="Budget" />
      <IconButton active={active[1]} status={start} onClick={sortByStart} text="Start Date" />
      <IconButton active={active[2]} status={end} onClick={sortByEnd} text="End Date" />
    </div>
  )
}

export default function Header(props) {
  return (
    <header>
      <h2>All Projects</h2>
      <TabList sortBy={props.sortBy} />
    </header>
  )
}
