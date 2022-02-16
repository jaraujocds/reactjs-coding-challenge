import React from "react";
import classNames from "classnames";

const Button = ({ onClick = () => {}, children, disabled }) => {
  return (
    <div
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "p-5 font-bold text-white bg-teal-500 rounded-xl hover:cursor-pointer w-max select-none text-xl",
        { "bg-slate-300 hover:cursor-not-allowed": disabled }
      )}
    >
      {children}
    </div>
  );
};

export default Button;
