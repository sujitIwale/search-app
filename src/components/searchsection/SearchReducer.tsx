import { SET_CURRENT_QUERY } from "./types";

export default (state: {}, action: { type: string }) => {
  switch (action.type) {
    case SET_CURRENT_QUERY:
      return state;
  }
};
