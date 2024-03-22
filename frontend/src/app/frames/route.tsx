import { createFrames, Button } from "frames.js/next";
 
const frames = createFrames();
const handleRequest = frames(async () => {
  return {
    image: <span>Test</span>,
    buttons: [<Button action="post">Click me</Button>],
  };
});
 
export const GET = handleRequest;
export const POST = handleRequest;