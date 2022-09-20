import React from 'react';
import Navbar from '../components/navbar/Navbar';
import ParentComponent from '../components/parentComponent/ParentComponent';
import Sidebar from '../components/sidebar/Sidebar';
import './HomePage.scss';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Trainings from '../components/trainings/Trainings';
import Meetups from '../components/meetups/Meetups';

const HomePage = () => {

    return (
        <BrowserRouter>
            <div className='homepage-container'>
                <Navbar />
                <div className="show-components">
                    <Sidebar />
                    <Routes>
                        <Route path='/trainings' element={<ParentComponent ChildComponent={<Trainings />} />} />
                        <Route path='/meetups' element={<ParentComponent ChildComponent={<Meetups />} />} />
                        <Route path='/webinars' element={<ParentComponent ChildComponent={<h1>Webinars</h1>} />} />
                        <Route path='/conference' element={<ParentComponent ChildComponent={<h1>Conference</h1>} />} />
                        <Route path='/videos' element={<ParentComponent ChildComponent={<h1>Videos</h1>} />} />
                        <Route path='/pm-speak-series' element={<ParentComponent ChildComponent={<h1>PM Speak Series</h1>} />} />
                        <Route path='/blogs' element={<ParentComponent ChildComponent={<h1>Blogs</h1>} />} />
                        <Route path='/be-a-speaker' element={<ParentComponent ChildComponent={<h1>Be a Speaker</h1>} />} />
                        <Route path='/be-a-volunteer' element={<ParentComponent ChildComponent={<h1>Be a Volunteer</h1>} />} />
                        <Route path='/about-us' element={<ParentComponent ChildComponent={<h1>About Us</h1>} />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default HomePage;