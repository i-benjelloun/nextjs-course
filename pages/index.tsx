import Link from "next/link";
import { FormEvent, useRef } from "react";

export default function Home() {
  const emailRef = useRef<HTMLInputElement>(null);
  const feedbackRef = useRef<HTMLTextAreaElement>(null);

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredEmail = emailRef.current?.value;
    const enteredFeedback = feedbackRef.current?.value;

    const requestBody = { email: enteredEmail, text: enteredFeedback };
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <h1>The home page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Your Email address</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea id="feedback" rows={5} ref={feedbackRef} />
        </div>
        <button type="submit">Send feedback</button>
      </form>
    </div>
  );
}
