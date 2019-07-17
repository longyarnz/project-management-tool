import React from 'react';

export function IconButton(props) {
  const active = props.icon || 'arrow_forward_ios';
  
  return (
    <button {...props}>
      <span>{props.text}</span>
      <i>{active}</i>
    </button>
  )
}

function TabList(props) {
  return (
    <div>
      <span>Sort by:</span>
      <IconButton text="Budget" />
      <IconButton text="Start Date" />
      <IconButton text="End Date" />
    </div>
  )
}

export default function Header() {
  return (
    <header>
      <h2>All Projects</h2>
      <TabList />
    </header>
  )
}
