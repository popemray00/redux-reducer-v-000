export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]}
    case "ADD_FRIEND":
     return {friends: state.friends}

      break;
    default:
      return state;

  }
}
