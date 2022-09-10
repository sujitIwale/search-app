import { ReactNode, useLayoutEffect } from "react";

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
  useLayoutEffect(() => {
    document.body.onclick = onBlur;

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
