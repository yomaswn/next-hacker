import React, { Fragment } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children, title, description, backButton }) => {
  return (
    <Fragment>
      <Head>
        <title>{title || 'Next Hacker'}</title>
        <meta name='description' content={description} />
        <link
          rel='stylesheet'
          href='https://unpkg.com/nprogress@0.2.0/nprogress.css'
        />
      </Head>
      <div className='container'>
        <nav>
          {backButton && (
            <span className='back-button' onClick={() => Router.back()}>
              &#x2b05;
            </span>
          )}
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
            nav .back-button {
              font-size: 0.9rem;
              padding-right: 1em;
              cursor: pointer;
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
        <style global jsx>
          {`
            body {
              background: #f0f0f0;
              margin: 0;
            }
          `}
        </style>
        <style>
          {`
            #nprogress .bar {
              background: cornflowerblue !important;
            }
          `}
        </style>
      </div>
    </Fragment>
  );
};

export default Layout;
