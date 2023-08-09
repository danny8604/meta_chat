"use client";

import Link from "next/link";
import Input from "../inputs/Input";
import Label from "../inputs/Label";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../button/Button";
import LineUnderText from "../ui/LineUnderText";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";

const registerContent = {
  linkUrl: "/signin",
  linkText: "Already have an account?",
  header: "Create a new account",
  subheader: "Just a few things to get started",
  buttonText: "REGISTER",
};

const signinContent = {
  linkUrl: "/register",
  linkText: "Don't have an account?",
  header: "Welcome back!",
  subheader: "Enter your credentials to access your account",
  buttonText: "SIGN IN",
};

interface AuthFormProps {
  model: "signin" | "register";
}

const AuthForm = ({ model }: AuthFormProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const authFornSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (model === "register") {
      const user = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(user, "<<<<<<<<<< user");

      toast.success("register  successed!!!");
      router.push("/signin");
    } else {
      signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/home",
        redirect: false,
      }).then((callback) => {
        if (callback?.error) {
          toast.error("log in  failed!!!");
        } else {
          toast.success("log in  successed!!!");
          router.push("/home");
        }
      });
    }
  };

  const content = model === "signin" ? signinContent : registerContent;

  return (
    <>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className=" bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <form className=" space-y-7" onSubmit={handleSubmit(authFornSubmit)}>
            {model === "register" && (
              <>
                <Label id="name">
                  Name
                  <Input
                    required
                    id="name"
                    type="text"
                    register={register}
                    errors={errors}
                  />
                </Label>
              </>
            )}
            <Label id="email">
              Email address
              <Input
                required
                id="email"
                type="email"
                register={register}
                errors={errors}
              />
            </Label>
            <Label id="password">
              Password
              <Input
                required
                id="password"
                type="password"
                register={register}
                errors={errors}
              />
            </Label>

            <Button intent="black" width="full">
              {content.buttonText}
            </Button>

            <div className="text-center">
              <Link href={content.linkUrl}>{content.linkText}</Link>
            </div>

            <LineUnderText text="Or continue with" />
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
