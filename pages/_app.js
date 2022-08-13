export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          a {
            color: blue;
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
}
