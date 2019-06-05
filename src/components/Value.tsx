import React, {StatelessComponent} from "react";

export interface OwnProps {
  number: number;
}
type Props = OwnProps;

const defaultProps: Partial<Props> = {
  number: -1
};

export const Value: StatelessComponent<Props> = ({number}) => {
  return (
    <div>
        <h1>{number}</h1>
    </div>
  );
};

Value.defaultProps = defaultProps;

export default Value;