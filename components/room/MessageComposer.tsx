"use client";

import { FieldValues, useForm } from "react-hook-form";
import { HiPaperAirplane } from "react-icons/hi";
import MessageComposerInput from "../inputs/MessageComposerInput";

const MessageComposer = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    setValue("message", "", { shouldValidate: true });
  };

  return (
    <div className="flex w-full items-center gap-2 border-t  border-slate-500 bg-none px-4  py-6  lg:gap-4">
      {/* <CldUploadButton
        options={{ maxFiles: 1 }}
        onUpload={handleUpload}
        uploadPreset="pgc9ehd5"
      >
        <HiPhoto size={30} className="text-sky-500" />
      </CldUploadButton> */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full items-center gap-2 lg:gap-4"
      >
        <MessageComposerInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="Write a message"
        />
        <button
          type="submit"
          className="cursor-pointer rounded-full bg-sky-500 p-2 transition hover:bg-sky-600"
        >
          <HiPaperAirplane size={18} className="text-white" />
        </button>
      </form>
    </div>
  );
};

export default MessageComposer;
