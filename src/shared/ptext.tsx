import React from "react";

type Props = {
  children: React.ReactNode;
};

const Ptext = ({ children }: Props) => {
  return <p className="my-8 text-md">{children}</p>;
};

export default Ptext;
