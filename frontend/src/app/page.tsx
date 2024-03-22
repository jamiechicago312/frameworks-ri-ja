import { fetchMetadata } from "frames.js/next";
 
export async function generateMetadata() {
  return {
    title: "My Page",
    // provide a full URL to your /frames endpoint
    ...(await fetchMetadata(
      new URL("/frames", process.env.VERCEL_URL || "http://localhost:3000")
    )),
  };
}
 
export default function Page() {
  return <span>My existing page here</span>;
}