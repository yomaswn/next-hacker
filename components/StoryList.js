import React from 'react';
import Link from 'next/link';
const StoryList = ({ stories }) => {
  return (
    <div className='story-list'>
      {stories.map((story) => (
        <div key={story.id} className='story'>
          <Link href={`/story?id=${story.id}`}>
            <a className='story-title'>{story.title}</a>
          </Link>
          <div className='story-details'>
            <span>{story.points || 0} points </span>
            <Link href={`/story?id=${story.id}`}>
              <a>{story.comments_count || 0} comments</a>
            </Link>
          </div>
        </div>
      ))}
      <style jsx>
        {`
          .story-list {
            padding: 0 1em;
          }
          .story {
            padding: 1em 0;
          }
          .story-title {
            font-size: 1rem;
            font-weight: 400;
            margin: 0;
            margin-bottom: 0.5em;
            text-decoration: none;
            color: #333;
          }
          .story-title:hover,
          .story-details a:hover {
            text-decoration: underline;
          }
          .story-details {
            font-size: 0.8rem;
            font-weight: bold;
          }
          .story-details span {
            margin-right: 1em;
          }
          .story-details a {
            color: #6600ff;
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
};

export default StoryList;
