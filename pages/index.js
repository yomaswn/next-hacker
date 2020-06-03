import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Error from 'next/error';

import StoryList from '../components/StoryList';

export default class index extends Component {
  static async getInitialProps() {
    let stories;
    try {
      const res = await fetch('https://node-hnapi.herokuapp.com/news?page=1');
      stories = await res.json();
    } catch (error) {
      console.log('err: ', error);
      stories = [];
    }

    return { stories };
  }
  render() {
    const { stories } = this.props;
    if (stories.length === 0) {
      return <Error statusCode={503} />;
    }
    return (
      <div>
        <h1>hacker news</h1>
        <StoryList stories={stories} />
      </div>
    );
  }
}
