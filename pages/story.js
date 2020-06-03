import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Error from 'next/error';

import Layout from '../components/Layout';
import CommentList from '../components/CommentList';

export class story extends Component {
  static async getInitialProps({ req, res, query }) {
    let storyId = query.id;
    let story;
    try {
      const res = await fetch(
        `https://node-hnapi.herokuapp.com/item/${storyId}`
      );
      story = await res.json();
    } catch (error) {
      console.log('err: ', error);
      story = null;
    }

    return { story };
  }
  render() {
    const { story } = this.props;

    if (!story) {
      return <Error statusCode={503} />;
    }
    return (
      <Layout title={story.title} backButton={true}>
        <main>
          <h1 className='story-title'>{story.title}</h1>
          <p className='story-link'>
            <a href={story.url}>View original post</a>
          </p>

          <div className='story-details'>
            <strong>{story.points} points</strong>
            <strong>{story.comments_count} comments</strong>
            <strong>{story.time_ago}</strong>
          </div>

          {story.comments.length > 0 ? (
            <CommentList comments={story.comments} />
          ) : (
            <div>no comment for this story</div>
          )}
        </main>

        <style jsx>
          {`
            main {
              padding: 1em;
            }
            .story-title {
              font-size: 1.8rem;
              margin: 0;
              font-weight: bold;
              padding-bottom: 0.5em;
              color: #333;
            }
            .story-link {
              text-decoration: none;
              font-size: 12px;
              margin: 0 0 10px 0;
            }
            .story-title a:hover {
              text-decoration: underline;
            }
            .story-details {
              font-size: 0.8rem;
              padding-bottom: 1em;
              border-bottom: 1px solid rgba(0, 0, 0, 0.1);
              margin-bottom: 1em;
            }
            .story-details strong {
              margin-right: 1em;
            }
            .story-details a {
              color: #f60;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default story;
