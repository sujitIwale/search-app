import { ReactNode, useLayoutEffect } from "react";

const ChildrenBlur = ({
  children,
  onBlur,
  onFocus,
  className,
}: {
  children: ReactNode;
  onBlur: () => any;
  onFocus: () => any;
  className: string;
}) => {
  useLayoutEffect(() => {
    document.body.addEventListener("click", onBlur);

    return function () {
      document.body.removeEventListener("click", this);
    };
  }, [onBlur]);

  return (
    <div
      className={className}
      onFocus={onFocus}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

export default ChildrenBlur;
