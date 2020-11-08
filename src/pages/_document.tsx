import Document, { Head, Html, Main, NextScript } from "next/document";

export default function CustomDocument(): JSX.Element {
  return (
    <Html>
      <Head>
        <script src="https://kit.fontawesome.com/74bf3ac2d3.js" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

CustomDocument.renderDocument = Document.renderDocument;
CustomDocument.getInitialProps = Document.getInitialProps;
