interface LabelProps {
  id: string;
  children?: React.ReactNode;
}

const Label = ({ id, children }: LabelProps) => {
  return (
    <label
      htmlFor={id}
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {children}
    </label>
  );
};

export default Label;
