import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  className?: string;
}

const Input = ({
  className,
  required,
  id,
  register,
  disabled,
  errors,
  ...props
}: InputProps) => {
  return (
    <input
      className={clsx(
        " form-input block w-full rounded-md border-0 p-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-sky-600 sm:text-sm sm:leading-6",
        errors[id!] && "focus:ring-rose-500",
        disabled && "cursor-default opacity-50",
        className,
      )}
      id={id}
      {...register(id!, { required })}
      {...props}
    />
  );
};

export default Input;
