import { ReactNode } from "react";

type ChildrenBlurProps = {
  children: ReactNode;
  onBlur: () => any;
  onFocus: () => any;
  className: string;
};

const ChildrenBlur = ({
  children,
  onBlur,
  onFocus,
  className,
}: ChildrenBlurProps) => {
  const openSuggestions = () => {
    document.body.onclick = closeSuggestions;
    onFocus();
  };
  const closeSuggestions = () => {
    document.body.onclick = null;
    onBlur();
  };

  return (
    <div
      className={className}
      onFocus={openSuggestions}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

export default ChildrenBlur;
