// I want to make a function component to Feeds section I want it include the "Feeds" text and it will be just a text 
// and include "Friends","Explore" text and I want it to make them as links under them I want to add "Posts","People",
// and it's a links too every link of all these links have a section when I click on Explore go to Explore page and make the text semi bold and make the color black 
// and make color of "Friends" text is #BCC5D7 and make it Regular and do this in all other clicks so when I click on any section go to the specific section and make the text semi bold black and other text regular and color #BCC5D7
// the "Posts","people" text and sections are in the Explore page so When click on "Friends" text make these two text disapeld and when click on "Explore" text make the text semi bold and make the color black and appear the two sections text and make "posts" section as a defult to open when open "Explore"

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const FeedsSection = () => {
  const [activeSection, setActiveSection] = useState('explore'); // Default active section

  return (
    <div className="flex justify-between items-center text-lg">
      <div className="text-black font-normal">
        Feeds
      </div>
      <div>
        <NavLink
          to="/friends"
          className={({ isActive }) =>
            isActive ? 'font-semibold text-black' : 'font-normal text-[#BCC5D7]'
          }
          onClick={() => setActiveSection('friends')}
        >
          Friends
        </NavLink>
        <NavLink
          to="/explore"
          className={({ isActive }) =>
            isActive ? 'font-semibold text-black ml-4' : 'font-normal text-[#BCC5D7] ml-4'
          }
          onClick={() => setActiveSection('explore')}
        >
          Explore
        </NavLink>
        {activeSection === 'explore' && (
          <>
            <NavLink
              to="/explore/posts"
              className={({ isActive }) =>
                isActive ? 'font-semibold text-black ml-4' : 'font-normal text-black ml-4'
              }
              end
            >
              Posts
            </NavLink>
            <NavLink
              to="/explore/people"
              className={({ isActive }) =>
                isActive ? 'font-semibold text-black ml-4' : 'font-normal text-black ml-4'
              }
            >
              People
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default FeedsSection;
