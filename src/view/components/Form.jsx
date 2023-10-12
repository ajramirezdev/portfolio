const Form = () => {
  const saveInputs = (event) => {
    switch (event.target.name) {
      case "firstName":
        break;
      case "lastName":
        break;
      case "email":
        break;
      case "password":
        break;
      default:
        break;
    }
  };

  return (
    <div className="add-background">
      <form className="form relative mx-auto" method="POST">
        <div>
          <input
            className="form-input block px-4 py-2 outline-none text-base text-neutral-800 mx-auto bg-transparent border-b-2 border-solid border-neutral-600 w-full"
            onChange={saveInputs}
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            required
          />
          <label
            className="form-label block text-base ml-4 mt-2 text-neutral-800"
            htmlFor="fullName"
          >
            Full Name
          </label>
        </div>
        <div>
          <input
            className="form-input block px-4 py-2 outline-none text-base text-neutral-800 mx-auto bg-transparent border-b-2 border-solid border-neutral-600 w-full"
            onChange={saveInputs}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <label
            className="form-label block text-base ml-4 mt-2 text-neutral-800"
            htmlFor="email"
          >
            Email
          </label>
        </div>
        <div>
          <input
            className="form-input block px-4 py-2 outline-none text-base text-neutral-800 mx-auto bg-transparent border-b-2 border-solid border-neutral-600 w-full"
            onChange={saveInputs}
            type="text"
            id="message"
            name="message"
            placeholder="Message"
            required
          />
          <label
            className="form-label block text-base ml-4 mt-2 text-neutral-800"
            htmlFor="message"
          >
            Message
          </label>
        </div>
        <input
          className="border-2 text-sm px-3 py-0.5 rounded-sm border-neutral-800 float-right cursor-pointer"
          type="submit"
          value="send"
        />
      </form>
    </div>
  );
};

export default Form;
