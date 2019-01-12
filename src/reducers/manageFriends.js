export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {ADD_FRIEND: state.ADD_FRIEND}

      break;
    default:
      return state;

  }
}
