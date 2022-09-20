import React from 'react';
import './Trainings.scss';
import designThinking from '../../assets/designThinking.png';
import CSPO from '../../assets/cspo.png';
import ICPPDM from '../../assets/icppdm.png';
import ACSPO from '../../assets/acspo.png';
import CPMP from '../../assets/cpmp.png';

const Trainings = () => {
    const cardsData = [
        {
            img: designThinking,
            title: 'Design Thinking',
            date: '8th Oct, 2021'
        },
        {
            img: CSPO,
            title: 'Certificate Scrum Product Owner...',
            date: '9th Oct, 2021'
        },
        {
            img: ICPPDM,
            title: 'Product Management Launchpad',
            date: '22nd Oct, 2021'
        },
        {
            img: ACSPO,
            title: 'Advanced Certified Scrum Product Owner',
            date: '26th Oct, 2021'
        },
        {
            img: CPMP,
            title: 'Product Management Bootcamp',
            date: 'will be scheduled soon'
        },
    ];

    return (
        <div className='trainings-container'>
            {
                cardsData.map((cardData, index) =>
                    <div className="trainings-card" key={index}>
                        <div className="img-container">
                            <img src={cardData.img} alt={cardData.title} />
                        </div>
                        <h4>{cardData.title}</h4>
                        <div className="show-date">
                            <p>Upcoming Training</p>
                            <h5>{cardData.date}</h5>
                        </div>
                        <button>Register</button>
                    </div>
                )
            }
        </div>
    )
}

export default Trainings;