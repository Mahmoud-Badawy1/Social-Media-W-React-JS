// we need to format the page as in photo: it has a text component that have the Expolre text and the Feeds in componetnts: <FeedsSection> and < FeedsNavigation >

import React from 'react';
import ExplorePosts from '../components/explore-posts';
import FeedsSection from '../components/feeds';
import Navigation from '../components/Navegation';
import '../index.css';

const Explore = () => {
  return (
    <div className="container mx-auto flex bg-[#fff6df]">
      <div className=" w-1/6">
        <Navigation />
      </div>
      <div className="w-3/4 flex">
        <FeedsSection />
        <ExplorePosts />
      </div>
    </div>
  );
};

export default Explore;
