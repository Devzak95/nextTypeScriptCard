import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("*Name Required")
    .matches(/^[a-zA-Z\s]+$/, "Kun bogstaver er tilladt"),
  email: yup.string().email("Invalid email format").required("*Email Required"),
  subject: yup
    .string()
    .trim()
    .required("*Subject Required")
    .matches(/^[a-zA-Z\s]+$/, "Kun Emne"),
  message: yup.string().trim().required("*Message Required"),
});

const useYupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  return { register, handleSubmit, errors, reset };
};

export default useYupForm;
