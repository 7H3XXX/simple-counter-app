import Head from "next/head";
import Counter from "../components/counter";

export const metadata = {
  title: "Counter App",
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Counter App</title>
        <meta
          name="description"
          content="A simple counter app built with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Counter />
      </main>
    </div>
  );
}
