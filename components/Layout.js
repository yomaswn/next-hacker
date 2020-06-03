import React, { Fragment } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Layout = ({ children, title, description }) => {
  return (
    <Fragment>
      <Head>
        <title>{title || 'Next Hacker'}</title>
        <meta name='description' content={description} />
      </Head>
      <div className='container'>
        <nav>
          <Link href='/'>
            <a>
              <span className='main-title'>Next Hacker</span>
            </a>
          </Link>
        </nav>

        {children}

        <style jsx>
          {`
            .main-title {
            }
            .container {
              max-width: 800px;
              margin: 0 auto;
              background: #f6f6ef;
            }
            nav {
              background: #f60;
              padding: 1rem;
            }
            nav > * {
              display: inline-block;
              color: black;
            }
            nav a {
              text-decoration: none;
            }
            nav .main-title {
              font-weight: bold;
            }
          `}
        </style>
        <style global jsx>
          {`
            body {
              background: white;
              font-family: Verdana, Geneva, sans-serif;
            }
          `}
        </style>
      </div>
    </Fragment>
  );
};

export default Layout;
