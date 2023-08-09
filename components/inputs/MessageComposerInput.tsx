import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageComposerInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
}

const MessageComposerInput = ({
  errors,
  required,
  id,
  register,
  placeholder,
  ...props
}: MessageComposerInputProps) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        autoComplete={id}
        {...register(id!, { required })}
        placeholder={placeholder}
        {...props}
        className=" w-full rounded-full px-4 py-2 font-light text-black  focus:outline-none
      "
      />
    </div>
  );
};

export default MessageComposerInput;
