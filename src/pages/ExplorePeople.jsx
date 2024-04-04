import React from 'react';
import ExplorePeople from '../components/explore-people';
import Search from '../components/Search';
import FeedsSection from '../components/feeds';
import FeedsNavigation from '../components/feedsNavigatin';
import Navigation from '../components/Navegation';

const ExplorePeoplePage = () => {
  return (
    <div className="container mx-auto flex">
      <div className="w-1/4">
        <Navigation />
        <FeedsNavigation />
      </div>
      <div className="w-3/4">
        <Search />
        <ExplorePeople />
      </div>
    </div>
  );
};

export default ExplorePeoplePage;
