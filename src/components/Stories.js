import React, { Component } from 'react';
import './Stories.css';
import Story from './Story.js';

const Stories = ({ stories }) =>
  <div className='stories'>
    {(stories || []).map(story =>
      <Story
        key={story.objectID}
        story={story}
        />
    )}
  </div>

  export default Stories;