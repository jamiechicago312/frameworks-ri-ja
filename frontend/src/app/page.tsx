import { fetchMetadata } from "frames.js/next";
import Head from "next/head";

export default function Page() {
  return (
    <div>
      <Head>
        <title>Frameworks Page heh</title>
        {/* FC Frames */}
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content="https://cdn.shopify.com/s/files/1/1061/1924/files/Shyly_Smiling_Face_Emoji.png?width=150" />
        <meta name="fc:frame:button:1" content="Click Me" />
      </Head>
      <p>Hello World</p>
    </div>
  );
}
