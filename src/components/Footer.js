import React from 'react';

const Footer = () => {
  // const icons = ['far fa-envelope', 'fab fa-github-alt', 'fab fa-linkedin-in', 'fab fa-twitter', 'fab fa-instagram'];

  return (
    <footer className='footer'>
      <div className='footer__social'>
        {/* {
          icons.map((icon, key) => {
            return <a href='#' className='footer__link' target='_blank'><i className={`${icon}` } key={key}></i></a>;
          })
        } */}
        <a href='mailto:ceejaymar@gmail.com' className='footer__link'><i className='footer__link-icon far fa-envelope'></i></a>
        <a href='https://github.com/Ceejaymar' className='footer__link' target='_blank' rel="noopener noreferrer"><i className='footer__link-icon fab fa-github-alt'></i></a>
        <a href='https://www.linkedin.com/in/carmart/' className='footer__link' target='_blank' rel="noopener noreferrer"><i className='footer__link-icon fab fa-linkedin-in'></i></a>
        <a href='https://twitter.com/steadyonthego' className='footer__link' target='_blank' rel="noopener noreferrer"><i className='footer__link-icon fab fa-twitter'></i></a>
        {/* <a href='https://www.instagram.com/steadyonthego/' className='footer__link' disabled='true' target='_blank'><i className='footer__link-icon fab fa-instagram'></i></a> */}
      </div>
    </footer>
  );
}

export default Footer;
