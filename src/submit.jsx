import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  password: "",
  age: "",
};

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Email is invalid.";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  if (!values.age) {
    errors.age = "Age is required.";
  } else if (Number(values.age) < 18) {
    errors.age = "You must be at least 18 years old.";
  }

  return errors;
}

function SubmitForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      alert("Form submitted successfully!");
      setValues(initialValues);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div>
      <h2>Validated Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>
            Name
            <input
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </label>
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="abc@gmail.com"
            />
          </label>
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </label>
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <div>
          <label>
            Age
            <input
              name="age"
              type="number"
              value={values.age}
              onChange={handleChange}
              placeholder="Your age"
              min="0"
            />
          </label>
          {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <p style={{ color: "green", marginTop: "1rem" }}>
          Form submitted successfully.
        </p>
      )}
    </div>
  );
}

export default SubmitForm;