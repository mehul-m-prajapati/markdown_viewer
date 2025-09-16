import Head from 'next/head'
import Editor from './Editor';


export default function Home() {
  return (
    <>
        <Head>
            <title>Markdown Viewer</title>
            <meta name="description" content="Live Markdown Viewer" />
        </Head>

        <Editor />
    </>
  );
}
