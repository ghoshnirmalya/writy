import { Action, AnyAction } from "@reduxjs/toolkit";

interface IRejectedAction extends Action {
  payload: {
    error: Error;
  };
}

const handleError = (action: AnyAction): action is IRejectedAction => {
  return action.type.endsWith("rejected");
};

export default handleError;
