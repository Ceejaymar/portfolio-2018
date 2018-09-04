import React, { Component } from 'react';
import IndividualProject from './IndividualProject';

class Projects extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const projectInfo = [
      {
        image: 'https://imgur.com/9JxelTF.png',
        summary: 'Knobcreek.',
        github: 'https://github.com/Ceejaymar/knobcreek-barrel',
        live: 'http://knobcreek-cm.surge.sh/'
      },
      {
        image: 'https://i.imgur.com/kBi9zkj.png',
        summary: '',
        github: 'https://github.com/Ceejaymar/ap-reactor-test',
        live: 'http://reactor-cm.surge.sh/'
      },
      {
        image: 'https://i.imgur.com/8PjNT4x.png',
        summary: 'Trillo static website built using HTML, SASS, Flexbox.',
        github: 'https://github.com/Ceejaymar/trillo-practice',
        live: 'http://trillo-carmar.surge.sh/'
      },
      {
        image: 'https://i.imgur.com/bVbujCA.png',
        summary: 'URL shortener made using Bitly\'s SDK.',
        github: 'https://github.com/Ceejaymar/Bitly-clone',
        live: 'http://bitly-clone.surge.sh/'
      },
      {
        image: 'http://i.imgur.com/C4KsvOx.png',
        summary: 'A peer review app that allows writers to upload work and receive feedback. Similar to Google Docs but affords more peer editing capabilities.',
        github: 'https://github.com/gilruben/critiQ',
        live: 'https://litclub.herokuapp.com'
      },
      {
        image: 'http://i.imgur.com/PQuRsal.png',
        summary: 'KarmaPoint is a platform that allows young adults the ability to find, track and verify volunteer hours.',
        github: 'https://github.com/bethea28/karmapoint',
        live: 'https://github.com/bethea28/karmapoint'
      }
    ];

    return (
      <section className="projects-section">
        <div className="projects">
            {
              projectInfo.map((project, key) => {
                return <IndividualProject project={project} key={key} />
              })
            }
          {/* <div className="projects__empty"></div> */}
        </div>
      </section>
    )
  }
}


export default Projects;