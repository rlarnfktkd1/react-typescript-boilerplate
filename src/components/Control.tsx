import React from "react";

const createWarning = (funcName:any) => {
  return () => console.warn(`${funcName} is not defined`);
};

export interface OwnProps {
  onPlus: () => void;
  onSubtract: () => void;
}

type Props = OwnProps;

const defaultProps: Partial<Props> = {
  onPlus: () => createWarning("onPlus"),
  onSubtract: () => createWarning("onSubtract")
};

export const Control: React.StatelessComponent<Props> = ({onPlus, onSubtract}) => {
  return (
    <div>
      <button onClick={onPlus}>+</button>
      <button onClick={onSubtract}>-</button>
    </div>
  );
};

Control.defaultProps = defaultProps;

export default Control;