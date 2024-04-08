import React from 'react';
import Suggestions from '../components/suggestions';
import Search from '../components/Search';
import FeedsSection from '../components/feeds';
import Navigation from '../components/Navegation';
import '../index.css';

const ExplorePeoplePage = () => {
  return (
    <div className="container flex" style={{ marginTop: 0, marginRight: 0, marginLeft: 0, width: '100%' }}>
      {/* Left column */}
      <div className="w-1/4" style={{ marginTop: 0, marginRight: 10, marginLeft: 0 }}>
        <div className="w-full">
          <Navigation />
        </div>
      </div>

      {/* Middle column */}
      <div className="w-1/2" style={{ marginTop: 10, marginRight: 20, marginLeft: 0 }}>
        <FeedsSection />
        <Suggestions />
      </div>

      {/* Right column */}
      <div className="w-1/4" style={{ marginTop: 0, marginRight: 0, marginLeft: 'auto' }}>
        <Search />
      </div>
    </div>
  );
};

export default ExplorePeoplePage;
