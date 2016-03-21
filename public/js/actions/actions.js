import fetch from 'isomorphic-fetch';

export const REQUEST_NAVBAR = 'REQUEST_NAVBAR';
export function requestNavbar() {
  return {
    type: REQUEST_NAVBAR
  };
}

export const RECEIVE_NAVBAR = 'RECEIVE_NAVBAR';
export function receiveNavbar(json) {
  return {
    type: RECEIVE_NAVBAR,
    data: json
  };
}

export function fetchNavbar(){

 return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestNavbar());

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`/api/navbar_pages`)
      .then(response => response.json())
      .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receiveNavbar(json))
      );

      // In a real world app, you also want to
      // catch any error in the network call.
  };
}

//SELECT_MATCH
//SELECT_MATCH_OVERVIEW
//REQUEST_MATCH
//RECEIVE_MATCH
//SELECT_PLAYER
//SELECT_PLAYER_OVERVIEW
//REQUEST_PLAYER
//RECEIVE_PLAYER
//SELECT_DISTRIBUTIONS
//SELECT_PICKS
//SELECT_CARRY
//REQUEST_CHEESE
//RECEIVE_CHEESE
