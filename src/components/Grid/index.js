import React from 'react';
import { FlatList } from '../Utils';
import { IconButton } from '../Header';

const projects = [
  {
    title: 'Construction of Borehole',
    location: 'Ikorodu, Lagos',
    budget: '$150,000,000',
    contractors: [
      '/assets/logo.png', '/assets/logo.png'
    ],
    report: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis a enim inventore quos velit ab ducimus vero perferendis quidem sequi voluptate architecto corrupti quibusdam magni delectus, explicabo tenetur recusandae.',
    completion: 50,
    uri: '/assets/6.jpg',
    status: 0
  },
  {
    title: 'Construction of Borehole',
    location: 'Ikorodu, Lagos',
    budget: '$150,000,000',
    contractors: [
      '/assets/logo.png', '/assets/logo.png'
    ],
    report: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis a enim inventore quos velit ab ducimus vero perferendis quidem sequi voluptate architecto corrupti quibusdam magni delectus, explicabo tenetur recusandae.',
    completion: 50,
    uri: '/assets/6.jpg',
    status: 1
  },
  {
    title: 'Construction of Borehole',
    location: 'Ikorodu, Lagos',
    budget: '$150,000,000',
    contractors: [
      '/assets/logo.png', '/assets/logo.png'
    ],
    report: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis a enim inventore quos velit ab ducimus vero perferendis quidem sequi voluptate architecto corrupti quibusdam magni delectus, explicabo tenetur recusandae.',
    completion: 50,
    uri: '/assets/6.jpg',
    status: 2
  },
  {
    title: 'Construction of Borehole',
    location: 'Ikorodu, Lagos',
    budget: '$150,000,000',
    contractors: [
      '/assets/logo.png', '/assets/logo.png'
    ],
    report: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis a enim inventore quos velit ab ducimus vero perferendis quidem sequi voluptate architecto corrupti quibusdam magni delectus, explicabo tenetur recusandae.',
    completion: 50,
    uri: '/assets/6.jpg',
    status: 3
  },
  {
    title: 'Construction of Borehole',
    location: 'Ikorodu, Lagos',
    budget: '$150,000,000',
    contractors: [
      '/assets/logo.png', '/assets/logo.png'
    ],
    report: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis a enim inventore quos velit ab ducimus vero perferendis quidem sequi voluptate architecto corrupti quibusdam magni delectus, explicabo tenetur recusandae.',
    completion: 50,
    uri: '/assets/6.jpg',
    status: 4
  },
  {
    title: 'Construction of Borehole',
    location: 'Ikorodu, Lagos',
    budget: '$150,000,000',
    contractors: [
      '/assets/logo.png', '/assets/logo.png'
    ],
    report: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis a enim inventore quos velit ab ducimus vero perferendis quidem sequi voluptate architecto corrupti quibusdam magni delectus, explicabo tenetur recusandae.',
    completion: 50,
    uri: '/assets/6.jpg',
    status: 5
  }
]

export default function Grid() {
  return (
    <section className="grid">
      <FlatList
        list={projects}
        listView={(i, o) => (
          <div key={`grid-${o}`} className="card">
            <Banner
              uri={i.uri}
              status={i.status}
              completion={i.completion}
            />

            <Profile
              title={i.title}
              location={i.location}
              budget={i.budget}
              report={i.report}
              contractors={i.contractors}
            />
          </div>
        )}
      />
    </section>
  )
}

function Banner(props) {
  const statusCodes = ['Defaulted', 'On track to be defaulted', 'Not initiated', 'Initiated', 'On track to be completed', 'Completed'];
  const colorCodes = ['red', 'orange', 'purple', 'green', 'gray', 'black'];
  const status = statusCodes[props.status];
  const statusColor = colorCodes[props.status];
  const statusBarStyle = { background: statusColor };
  const progressBarStyle = { right: `${100 - props.completion}%` }

  return (
    <section className="banner">
      <span style={statusBarStyle}>{status}</span>
      <img src={props.uri} alt="Project Site" />
      <div>
        <span style={progressBarStyle} />
        <span>{props.completion}% complete</span>
      </div>
    </section>
  )
}

function Profile(props) {
  return (
    <section className="profile">
      <header>
        <h5>{props.title}</h5>
        <sub>
          <div>
            <i>place</i>
            <span>{props.location}</span>
          </div>
          <div>
            <i>money</i>
            <span>Budget: {props.budget}</span>
          </div>
        </sub>
      </header>

      <p>
        {props.report}
        &nbsp;<a href="/">Read more</a>
      </p>

      <footer>
        <h6>Contractors</h6>
        <div>
          <FlatList
            list={props.contractors}
            listView={(i, o) => (
              <div key={`pro-${o}`}>
                <img src={i} alt="contractor" />
              </div>
            )}
          />
        </div>

        <div>
          <IconButton text="View more details" icon="arrow_forward_ios" />
        </div>
      </footer>
    </section>
  )
}