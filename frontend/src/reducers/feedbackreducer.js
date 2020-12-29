import { feedback_request,feedback_success,feedback_fail,feedbacks_request,feedbacks_success,feedbacks_fail} from "../constants/feedbackConstants";


function feedbackCreateReducer(state = {}, action) {
    switch (action.type) {
      case feedback_request:
        return { loading: true };
      case feedback_success:
        return { loading: false, order: action.payload, success: true };
      case feedback_fail:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  
  function feedbackListReducer(state = {
    orders: []
  }, action) {
    switch (action.type) {
      case feedbacks_request:
        return { loading: true };
      case feedbacks_success:
        return { loading: false, orders: action.payload };
      case feedbacks_fail:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  
  export {
    feedbackCreateReducer, feedbackListReducer
  }