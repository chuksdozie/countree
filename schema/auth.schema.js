import * as Yup from "yup";

export const registerSchema = Yup.object({
  name: Yup.string().required("Required field, Please fill."),
  email: Yup.string()
    .email("Invalid email format, Please provide a valid email address")
    .required("Required field, Please fill."),
  password: Yup.string()
    .required("Please enter your password")
    .min(
      8,
      "Invalid Password! Should contain upper and lowercase letters and a number."
    )
    .test(
      "isValidPass",
      "Password should contain upper and lowercase letters and a number",
      (value) => {
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasSymbole = /[!@#%&]/.test(value);
        let validConditions = 0;
        const numberOfMustBeValidConditions = 3;
        const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole];
        conditions.forEach((condition) =>
          condition ? validConditions++ : null
        );
        if (validConditions >= numberOfMustBeValidConditions) {
          return true;
        }
        return false;
      }
    ),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const signInSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format, Please provide a valid email address")
    .required("Required field, Please fill."),
  password: Yup.string().required("Please enter your password"),
});
