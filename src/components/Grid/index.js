import React from 'react';
import { FlatList } from '../Utils';
import { IconButton } from '../Header';

export default function Grid(props) {
  return (
    <section className="grid">
      <FlatList
        list={props.projects}
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
  const budget = props.budget > 999 ? Math.ceil(props.budget / 1000) : props.budget;
  const quantifier = props.budget > 999 ? 'B' : 'M';

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
            <span>Budget: ₦{budget}{quantifier}</span>
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