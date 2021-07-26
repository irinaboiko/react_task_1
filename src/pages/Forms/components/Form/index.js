import React from "react";

const Form = ({
  formValues,
  handleChange,
  handleReset,
  handleSubmit,
  isSubmitDisabled,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Text</p>
        <input
          value={formValues.text}
          onChange={handleChange}
          type="text"
          name="text"
        />
      </label>
      <label>
        <p>Email</p>
        <input
          value={formValues.email}
          onChange={handleChange}
          type="email"
          name="email"
        />
      </label>
      <label>
        <p>Password</p>
        <input
          value={formValues.password}
          onChange={handleChange}
          type="password"
          name="password"
        />
      </label>

      <button disabled={isSubmitDisabled} role="submit">
        Submit
      </button>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
};

export default Form;
