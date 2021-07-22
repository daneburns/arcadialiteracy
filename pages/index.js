import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-brown-500">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='space-y-12'>
      <h1 className="text-7xl font-serif">Arcadia Literacy & Learning</h1>
      <h1 className="text-7xl font-sans">Arcadia Literacy & Learning</h1>
      <h1 className="text-7xl font-outline">Arcadia Literacy & Learning</h1>
    </div>
    </div>
  );
}
 