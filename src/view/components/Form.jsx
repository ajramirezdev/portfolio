import { useState } from "react";
import EmailModel from "../../models/EmailModel";

const Form = () => {
  const [emailInfo, setEmailInfo] = useState({});
  const [emailSent, setEmailSent] = useState(null);
  const [emptyFields, setEmptyFields] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);

  const saveInputs = (event) => {
    switch (event.target.name) {
      case "fullName":
        setEmailInfo({ ...emailInfo, fullName: event.target.value });
        break;
      case "email":
        setEmailInfo({ ...emailInfo, email: event.target.value });
        break;
      case "message":
        setEmailInfo({ ...emailInfo, message: event.target.value });
        break;
      default:
        break;
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (
      emailInfo.fullName.trim() !== "" &&
      emailInfo.email.trim() !== "" &&
      emailInfo.message.trim() !== ""
    ) {
      setSendingEmail(true);
      await EmailModel.sendEmail(emailInfo);
      setSendingEmail(false);
      setEmailSent(true);
      setEmptyFields(false);
      document.getElementById("fullName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";

      setTimeout(() => {
        setEmailSent(false);
      }, 5000);
    } else {
      setEmptyFields(true);
    }
  };

  return (
    <div className="add-background">
      <form
        className="form relative mx-auto"
        method="POST"
        onSubmit={sendEmail}
      >
        <div>
          <input
            className="form-input block px-4 py-2 outline-none text-base md:text-lg lg:text-xl text-neutral-800 mx-auto bg-transparent border-b-2 border-solid border-neutral-600 w-full"
            onChange={saveInputs}
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            required
          />
          <label
            className="form-label block text-base md:text-lg lg:text-xl ml-4 mt-2 text-neutral-800"
            htmlFor="fullName"
          >
            Full Name
          </label>
        </div>
        <div>
          <input
            className="form-input block px-4 py-2 outline-none text-base md:text-lg lg:text-xl text-neutral-800 mx-auto bg-transparent border-b-2 border-solid border-neutral-600 w-full"
            onChange={saveInputs}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <label
            className="form-label block text-base md:text-lg lg:text-xl ml-4 mt-2 text-neutral-800"
            htmlFor="email"
          >
            Email
          </label>
        </div>
        <div>
          <input
            className="form-input block px-4 py-2 outline-none text-base md:text-lg lg:text-xl text-neutral-800 mx-auto bg-transparent border-b-2 border-solid border-neutral-600 w-full"
            onChange={saveInputs}
            type="text"
            id="message"
            name="message"
            placeholder="Message"
            required
          />
          <label
            className="form-label block text-base md:text-lg lg:text-xl ml-4 mt-2 text-neutral-800"
            htmlFor="message"
          >
            Message
          </label>
        </div>
        <button
          className="border-2 text-sm md:text-base xl:text-lg px-3 py-0.5 rounded-sm border-neutral-800 float-right cursor-pointer hover:text-neutral-500 hover:border-neutral-400 transition ease-out duration-500"
          type="submit"
        >
          {sendingEmail ? (
            <svg
              className="h-6 animate-spin text-neutral-800 mx-1.5 my-0.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : emailSent ? (
            "sent!"
          ) : (
            "send"
          )}
        </button>
        {emptyFields ? (
          <div className="absolute right-16 md:right-20 md:-bottom-7">
            *fields must not be empty
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default Form;
