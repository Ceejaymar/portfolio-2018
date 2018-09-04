import React from 'react';

const IndividualProject = ({ project }) => {
  const { image, summary, github, live} = project;

  const style = {
    backgroundImage: `url(${ image })`
  };

  return (
    <article style={ style } className="project">
      <div className="project__overlay">
        <div className="blank"></div>
        <div className='project__text'>{ summary }</div>
        <div className='project__links'>
          <a className='project__link' href={ github } target='_blank' rel='noopener noreferrer'>Github</a>
          <a className='project__link' href={ live } target='_blank' rel='noopener noreferrer'>Live</a>
        </div>
      </div>
    </article>
  )
}

export default IndividualProject;