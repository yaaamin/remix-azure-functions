import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const action = async ({ request }) => {
  console.log("Index action function", request.url);
  return redirect("/my-items");
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }} className="max-w-3xl mx-auto py-10">
      <h1 className="font-bold text-4xl">Welcome to Remix</h1>
      <Form method="post">
        <input type="text" name="name" placeholder="Your name" className="border p-2" />
        <input type="submit" value="Submit" className="font-semibold text-white bg-blue-800 px-3 py-2.5 mx-3 rounded pointer-events-auto" />
      </Form>
      <ul>
        <li className="py-2">
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer" className="py-2 hover:underline decoration-blue-600 hover:text-blue-600  "
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li  className="py-2">
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer" className="py-2 hover:underline decoration-blue-600 hover:text-blue-600 "
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li  className="py-2">
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer" className="py-2 hover:underline decoration-blue-600 hover:text-blue-600 ">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
