import { createFrames, Button } from "frames.js/next";
 
const frames = createFrames();
const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <span>
        {ctx.pressedButton
          ? `I clicked ${ctx.searchParams.value}`
          : `Click some button`}
      </span>
    ),
    buttons: [
      <Button action="post" target={{ query: { value: "Yes" }}}>
        Say Yes
      </Button>,
      <Button action="post" target={{ query: { value: "No" }}}>
        Say No
      </Button>,
    ],
  };
});
 
export const GET = handleRequest;
export const POST = handleRequest;