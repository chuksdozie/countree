import PrimaryButton from "@/components/simple/buttons/PrimaryButton";
import TextInput from "@/components/simple/inputs/TextInput";
import { FormWrapper } from "@/components/styles/general";
import { useLogin } from "@/hooks/auth/auth.hook";
import { signInSchema } from "@/schema/auth.schema";
import { resetAccount, setAccount } from "@/store/slices/account.slice";
import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const LoginForm = () => {
  const { mutate } = useLogin();
  const dispatch = useDispatch();
  return (
    <div style={{ width: "100%" }}>
      <Formik
        initialValues={{}}
        onSubmit={(payload, actions) => {
          mutate(payload, {
            onSuccess: (res) => {
              const tokens = res?.data?.tokens;
              const user = res?.data?.user;
              console.log("submitted", res, { tokens, user });
              localStorage.setItem("accessToken", tokens?.access?.token);
              localStorage.setItem("refreshToken", tokens?.refresh?.token);
              dispatch(setAccount(user));
              toast.success("Logged in successfully");
              // actions.resetForm();
            },
            onError: (err) => {
              console.log("failed", err);
              toast.error(
                err?.response?.data?.message ?? "Something went wrong"
              );
            },
          });
          console.log("submitted", payload);
        }}
        validationSchema={signInSchema}
        validateOnChange={true}
        validateOnMount={true}
      >
        {({ values, errors, handleChange, handleSubmit }) => {
          return (
            <FormWrapper>
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
              <PrimaryButton
                onClick={() => {
                  console.log({ errors: Object.keys(errors)?.length });
                  if (Object.keys(errors)?.length > 0) {
                    return;
                  }
                  handleSubmit();
                }}
                value={"Login"}
                type={"submit"}
              />
            </FormWrapper>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginForm;
