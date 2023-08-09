"use client";

import useSidebarOptions from "@/hooks/useSidebarOptions";
import Option from "../options/Option";

const SidebarOptions = () => {
  const options = useSidebarOptions();
  return (
    <nav>
      <ul className="flex flex-col items-center space-y-2">
        {options.map((option) => (
          <Option
            key={option.label}
            label={option.label}
            icon={option.icon}
            active={option.active}
            href={option.href}
            onClick={option.onClick}
          />
        ))}
      </ul>
    </nav>
  );
};

export default SidebarOptions;
