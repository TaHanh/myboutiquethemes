import Document, { Head, Main, NextScript } from 'next/document'
// import classes from './app.css';

export default class MyDocument extends Document {
 static async getInitialProps(ctx) {
   const initialProps = await Document.getInitialProps(ctx)
   return { ...initialProps }
 }

 render() {
   return (
     <html>
       <Head>
       <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
           <link rel="stylesheet" href="style.css" />
       </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </html>
   )
 }
}