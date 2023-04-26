import Head from 'next/head';

function Meta() {
  return (
    <Head>
      <title>Dmitris Crypto Tracker</title>

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Crypto price tracker app is developed by Dmitri Diakov"
      />
      <meta
        name="keywords"
        content="code, relavancy, crypto price tracker app, next.js, typescript, tailwind css, binance, crypto, cryptocurrencies, decentralized, security, blockchain"
      />
      <meta name="author" content="Dmitri Diakov" />
      <meta name="msapplication-TileImage" content="/dd.png" />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Crypto Price Tracker App" />
      <meta
        property="og:description"
        content="Crypto price tracker app is developed by Dmitri Diakov"
      />
      <meta
        property="og:url"
        content="https://www.linkedin.com/in/dmitridiakov/"
      />
      <meta property="og:site_name" content="Code of Relevancy" />
      <meta property="og:image" content="/dd.png" />
      <meta property="og:image:width" content="200" />
      <meta property="og:image:height" content="200" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Tags */}
      <meta name="twitter:title" content="Crypto Price Tracker App" />
      <meta
        name="twitter:description"
        content="Crypto price tracker app is developed by Dmitri Diakov"
      />
      <meta name="twitter:image" content="/dd.png" />
      <meta name="twitter:image:alt" content="dmitridiakov" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@@d1d1d1d1d1d111" />

      {/* App Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Meta;
