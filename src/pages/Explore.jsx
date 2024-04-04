// we need to format the page as in photo: it has a text component that have the Expolre text and the Feeds in componetnts: <FeedsSection> and < FeedsNavigation >

import React from 'react';
import ExplorePosts from '../components/explore-posts';
import FeedsSection from '../components/feeds';
import FeedsNavigation from '../components/feedsNavigatin';
import Navigation from '../components/Navegation';

const Explore = () => {
  return (
    <div className="container mx-auto flex">
      <div className="w-1/4">
        <Navigation />
        <FeedsNavigation />
      </div>
      <div className="w-3/4">
        <FeedsSection />
        <ExplorePosts />
      </div>
    </div>
  );
};

export default Explore;
