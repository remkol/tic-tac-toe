import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Status = ({ children: text }: Props) => {
  return <div className="alert alert-primary">{text}</div>;
};

export default Status;
