export function manageFriends(state, action){
  switch (action.friend) {
    case "ADD_FRIEND":
      return {friends: state.friends}
    case "ADD_FRIEND":
     return {friends: state.friends}

      break;
    default:
      return state;

  }
}
