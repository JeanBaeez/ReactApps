import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { createUserAuthWithEmailAndPassword } from "../../Utils/firebase/utils.firebase";
import "../forms/form-input.styles.scss";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const hanldeOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const { email, password, confirmPassword } = formFields;
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await createUserAuthWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label>Display Name</label>
          <input
            type="text"
            required
            onChange={hanldeOnChange}
            name="displayName"
          ></input>

          <label>Email</label>
          <input
            type="Email"
            required
            onChange={hanldeOnChange}
            name="email"
          ></input>

          <label>Password</label>
          <input
            type="password"
            required
            onChange={hanldeOnChange}
            name="password"
          ></input>

          <label>Confirm Password</label>
          <input
            type="password"
            required
            onChange={hanldeOnChange}
            name="confirmPassword"
          ></input>

          <button type="submit"> Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
