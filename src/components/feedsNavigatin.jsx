import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const FeedsNavigation = () => {
  const [activeSection, setActiveSection] = useState('feeds');
  const [activeSubSection, setActiveSubSection] = useState('posts');

  const isSectionActive = (section) => activeSection === section;
  const isSubSectionActive = (subSection) => activeSubSection === subSection;

  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <span className="text-lg font-semibold">Feeds</span>
      </div>
      <div>
        <Link
          to="/friends"
          className={`mx-2 ${isSectionActive('friends') ? 'text-black font-semibold' : 'text-[#BCC5D7] font-normal'}`}
          onClick={() => setActiveSection('friends')}
        >
          Friends
        </Link>
        <Link
          to="/explore"
          className={`mx-2 ${isSectionActive('explore') ? 'text-black font-semibold' : 'text-[#BCC5D7] font-normal'}`}
          onClick={() => {
            setActiveSection('explore');
            setActiveSubSection('posts'); // Set "Posts" as the default subsection
          }}
        >
          Explore
        </Link>

        {isSectionActive('explore') && (
          <>
            <Link
              to="/explore/posts"
              className={`mx-2 ${isSubSectionActive('posts') ? 'text-black font-semibold' : 'text-[#BCC5D7] font-normal'}`}
              onClick={() => setActiveSubSection('posts')}
            >
              Posts
            </Link>
            <Link
              to="/explore/people"
              className={`mx-2 ${isSubSectionActive('people') ? 'text-black font-semibold' : 'text-[#BCC5D7] font-normal'}`}
              onClick={() => setActiveSubSection('people')}
            >
              People
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default FeedsNavigation;
