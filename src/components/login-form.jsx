import { Form, Formik } from "formik";
import * as Yup from "yup";
import { generateToken } from "../helpers/utils";
import { REFRESH_TOKEN_DURATION, SESSION_DURATION } from "../helpers/constants";
import PropTypes from "prop-types";

const schema = Yup.object().shape({
  username: Yup.string()
    .required("Username is a required field")
    .min(8, "username must be at least 5 characters"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});
// Hardcoded user credentials (in real app, this would come from a database)
const validCredentials = {
  username: "admin123",
  password: "password123",
};
const LoginForm = ({ setIsLoggedIn }) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#4b6cb7] to-[#182848] py-[8%]">
      <div className="mx-auto w-[360px]">
        <div className="relative z-10 mx-auto mb-24 w-full max-w-[360px] rounded-lg bg-white p-12 text-center">
          <Formik
            validationSchema={schema}
            initialValues={{ username: "", password: "" }}
            onSubmit={(values) => {
              if (
                values.username === validCredentials.username &&
                values.password === validCredentials.password
              ) {
                const now = new Date().getTime();

                // Create session data with expiration
                const sessionData = {
                  username: values.username,
                  isLoggedIn: true,
                  loginTime: now,
                  accessToken: generateToken(),
                  refreshToken: generateToken(),
                  expiresAt: now + SESSION_DURATION,
                  refreshTokenExpiresAt: now + REFRESH_TOKEN_DURATION,
                  lastRefreshed: now,
                };

                // Store in localStorage
                localStorage.setItem(
                  "sessionData",
                  JSON.stringify(sessionData)
                );
                setIsLoggedIn(true);
              } else {
                setIsLoggedIn(false);
                alert("incorrect creditionals");
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <span className="mb-6 block text-4xl text-[#4b6cb7]">
                  Login
                </span>
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder="Enter username"
                  className="mb-4 w-full rounded bg-[#f2f2f2] px-4 py-4 text-sm outline-none focus:bg-[#dbdbdb]"
                  id="username"
                />
                <p className="mb-2 ml-2 text-left text-xs text-red-500">
                  {errors.username && touched.username && errors.username}
                </p>

                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="mb-4 w-full rounded bg-[#f2f2f2] px-4 py-4 text-sm outline-none focus:bg-[#dbdbdb]"
                />
                <p className="mb-2 ml-2 text-left text-xs text-red-500">
                  {errors.password && touched.password && errors.password}
                </p>

                <button
                  type="submit"
                  className="w-full rounded bg-[#4b6cb7] px-4 py-4 text-sm font-normal uppercase text-white transition-all duration-300 hover:bg-[#395591] cursor-pointer"
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};
