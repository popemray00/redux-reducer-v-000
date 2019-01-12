export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {friend: state.friend}

      break;
    default:
      return state;

  }
}
