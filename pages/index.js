import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Error from 'next/error';

import StoryList from '../components/StoryList';
import Layout from '../components/Layout';

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
      <Layout title='Next Hacker' description='Hacker news build with next'>
        <StoryList stories={stories} />
      </Layout>
    );
  }
}
