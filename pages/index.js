import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Link from 'next/link';

import StoryList from '../components/StoryList';
import Layout from '../components/Layout';

export default class index extends Component {
  static async getInitialProps({ req, res, query }) {
    let stories;
    let page;
    try {
      page = Number(query.page) || 1;
      const res = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );
      stories = await res.json();
    } catch (error) {
      console.log('err: ', error);
      stories = [];
    }

    return { stories, page };
  }
  render() {
    const { stories, page } = this.props;
    if (stories.length === 0) {
      return <Error statusCode={503} />;
    }
    return (
      <Layout title='Next Hacker' description='Hacker news build with next'>
        <StoryList stories={stories} />

        <footer>
          <Link href={`/?page=${page + 1}`}>
            <a>Next Page ({page + 1})</a>
          </Link>
        </footer>
        <style>
          {`
            footer {
              padding: 1em;
            }
            footer a {
              font-weight: bold;
              color: black;
              text-decoration: none;
            }
          `}
        </style>
      </Layout>
    );
  }
}
