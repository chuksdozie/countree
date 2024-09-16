import PrimaryButton from "@/components/simple/buttons/PrimaryButton";
import TextInput from "@/components/simple/inputs/TextInput";
import { FormWrapper } from "@/components/styles/general";
import { useRegister } from "@/hooks/auth/auth.hook";
import { registerSchema } from "@/schema/auth.schema";
import { Formik } from "formik";
import React from "react";

const RegisterForm = () => {
  const { mutate } = useRegister();
  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={(payload, actions) => {
          const { name, email, password } = payload;
          mutate(
            { name, email, password },
            {
              onSuccess: (res) => {
                console.log("submitted", res);
                actions.resetForm();
              },
              onError: (err) => {
                console.log("failed", err);
              },
            }
          );
          console.log("submitted", payload);
        }}
        validationSchema={registerSchema}
        validateOnChange={true}
        validateOnMount={true}
      >
        {({ values, errors, handleChange, handleSubmit }) => {
          return (
            <FormWrapper>
              <TextInput
                label={"Name"}
                type={"text"}
                name={"name"}
                id={"name"}
                value={values?.name ?? ""}
                error={errors?.name}
                // placeholder={"placeholder"}
                onChange={handleChange}
              />
              <TextInput
                label={"Email Address"}
                type={"email"}
                name={"email"}
                id={"email"}
                value={values?.email ?? ""}
                error={errors?.email}
                // placeholder={"placeholder"}
                onChange={handleChange}
              />

              <TextInput
                label={"Password"}
                type={"password"}
                name={"password"}
                id={"password"}
                value={values?.password ?? ""}
                error={errors?.password}
                // placeholder={"placeholder"}
                onChange={handleChange}
              />
              <TextInput
                label={"Confirm Password"}
                type={"password"}
                name={"confirmPassword"}
                id={"confirmPassword"}
                value={values?.confirmPassword ?? ""}
                error={errors?.confirmPassword}
                // placeholder={"placeholder"}
                onChange={handleChange}
              />
              <PrimaryButton
                onClick={() => {
                  console.log({ errors: Object.keys(errors)?.length });
                  if (Object.keys(errors)?.length > 0) {
                    return;
                  }

                  handleSubmit();
                }}
                value={"Create Account"}
                type={"submit"}
              />
            </FormWrapper>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterForm;
