import Line from "./Line";

interface LineUnderTextProps {
  text?: string;
}

const LineUnderText = ({ text }: LineUnderTextProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <Line className="border-gray-300" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="bg-white px-2 text-gray-500">{text}</span>
      </div>
    </div>
  );
};

export default LineUnderText;
