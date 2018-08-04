import { Callback, Context, Handler } from "aws-lambda";

const handler: Handler = (event: any, context: Context, callback: Callback) => {
  callback(null, {
    isBase64Encoded: false,
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: [
      {
        name: "James"
      },
      {
        name: "Ana"
      },
      {
        name: "Lilly"
      },
      {
        name: "Jeremiah"
      },
      {
        name: "Ariana"
      }
    ]
  });
};

export { handler };
