function restaurants(state = {}, action) {
    switch (action.type) {
      case 'SET_RESTAURANT_LIST': {
        return {...state, ...action.payload}
      }
      case 'SET_PICKUP_LOCATION': {
        return {...state, ...action.payload}
      }
      case 'SET_SELECTED_USR': {
        return {...state, selectedUser: action.payload.user}
      }
      case 'SET_SELECTED_RESTAURANT': {
        return {...state, idRestaurant: action.payload.idRestaurant}
      }
      default:
        return state
    }
  }
  
  export default restaurants;