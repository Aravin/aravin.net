/* eslint-disable react/no-string-refs */
import App, { AppContext } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import '../assets/css/style.css';
import { createContext, useEffect } from 'react';
import { fetchAPI } from '../lib/api';
import { getStrapiMedia } from '../lib/media';
import type { AppProps /*, AppContext */ } from 'next/app';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import Script from 'next/script';
import * as ga from '../lib/gtag';

// Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  const { global } = pageProps;

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id={'gtag'}>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
        <link ref="stylesheet" href="highlight.js/styles/default.css" />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx: AppContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI('/global', {
    populate: {
      favicon: '*',
      defaultSeo: {
        populate: '*',
      },
    },
  });

  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: global.data } };
};

export default MyApp;
