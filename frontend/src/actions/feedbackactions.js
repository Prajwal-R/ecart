import Axios from "axios";

import { feedback_request,feedback_success,feedback_fail,feedbacks_request,feedbacks_success,feedbacks_fail} from "../constants/feedbackConstants";

const createfeedback = (feedback) => async (dispatch, getState) => {
  try {
    dispatch({ type: feedback_request, payload: feedback });
    
    const { data: { data: newfeedback } } = await Axios.post("/api/feedback", order, {
      headers: {
        Authorization: ' Bearer ' + userInfo.token
      }
    });
    dispatch({ type: feedback_success, payload: newfeedback });
  } catch (error) {
    dispatch({ type: feedback_fail, payload: error.message });
  }
}


const listfeedback = () => async (dispatch, getState) => {

  try {
    dispatch({ type: feedbacks_request });
    const { data } = await Axios.get("/api/feedback", {
      headers:
        { Authorization: 'Bearer ' + userInfo.token }
    });
    dispatch({ type: feedbacks_success, payload: data })
  } catch (error) {
    dispatch({ type: feedbacks_fail, payload: error.message });
  }
}


export { createfeedback, listfeedback };