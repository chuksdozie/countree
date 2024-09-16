import PrimaryButton from "@/components/simple/buttons/PrimaryButton";
import TextInput from "@/components/simple/inputs/TextInput";
import { FormWrapper } from "@/components/styles/general";
import { useCreateTaskboard } from "@/hooks/taskboard/taskboard.hook";
import { createTaskboardSchema } from "@/schema/taskboard.schema";
import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const CreateBoardForm = ({ setShowModal }) => {
  const { mutate, isPending } = useCreateTaskboard();
  return (
    <div style={{ width: "100%", padding: "1rem" }}>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values) => {
          console.log({ values });
          mutate(values, {
            onSuccess: () => {
              setShowModal(false);
              values.name = "";
              toast.success("Board Created Successfully");
            },
            onError: (err) => {
              console.log("failed", err);
              toast.error(
                err?.response?.data?.message ?? "Something went wrong"
              );
            },
          });
        }}
        validationSchema={createTaskboardSchema}
        validateOnChange={true}
        validateOnMount={true}
        validateOnBlur={true}
      >
        {({ values, errors, handleChange, handleSubmit }) => {
          return (
            <FormWrapper>
              <TextInput
                label={"Board Name"}
                type={"text"}
                name={"name"}
                id={"name"}
                value={values?.name ?? ""}
                error={errors?.name}
                // placeholder={"placeholder"}
                onChange={handleChange}
              />

              <PrimaryButton
                disabled={isPending}
                onClick={() => {
                  console.log({ errors: Object.keys(errors)?.length });
                  if (Object.keys(errors)?.length > 0) {
                    return;
                  }
                  handleSubmit();
                }}
                value={"Create Board"}
                type={"submit"}
              />
            </FormWrapper>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateBoardForm;
