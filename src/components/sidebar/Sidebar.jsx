import React, { useState } from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [links, setLinks] = useState([
    {
      title: 'Trainings',
      link: '/trainings'
    },
    {
      title: 'Meetups',
      link: '/meetups'
    },
    {
      title: 'Webinars',
      link: '/webinars'
    },
    {
      title: 'Conference',
      link: '/conference'
    },
    {
      title: 'Videos',
      link: '/videos'
    },
    {
      title: 'PM speak series',
      link: '/pm-speak-series'
    },
    {
      title: 'Blogs',
      link: '/blogs'
    },
    {
      title: 'Podcasts',
      link: '/podcasts'
    },
    {
      title: 'Be a Speaker',
      link: '/be-a-speaker'
    },
    {
      title: 'Be a Volunteer',
      link: '/be-a-volunteer'
    },
    {
      title: 'About Us',
      link: '/about-us'
    },
  ]);

  const [isActive, setIsActive] = useState();
  return (
    <div className='sidebar-container'>
      {links.map((link, index) =>
        <Link
          to={link.link}
          key={index}
          className={isActive === index && 'active'}
          onClick={() => setIsActive(index)}
        >
          {link.title}
        </Link>
      )}
    </div>
  )
}

export default Sidebar;