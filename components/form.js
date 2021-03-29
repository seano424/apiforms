import { useRef } from "react";

export default function Form(props) {
  const nameRef = useRef();
  const emailRef = useRef();

  function handleSubmission(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    const data = {
      name,
      email
    };

    fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    props.submitMe()
  }

  return (
    <form onSubmit={handleSubmission}>
      <div>
        <input name="name" type="text" placeholder="My name" ref={nameRef} />
      </div>
      <div>
        <input
          name="email"
          type="email"
          placeholder="email address"
          ref={emailRef}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}
