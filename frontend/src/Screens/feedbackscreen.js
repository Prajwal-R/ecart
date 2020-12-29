import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {createfeedback, listfeedback } from '../actions/feedbackactions' ;
import { feedback_save } from '../constants/feedbackConstants';
  const feedbackSave = useSelector((state) => state.feedbackReviewSave);
  const { success: feedbackSaveSuccess } = feedbackSave;
  function feedbackScreen(props) {
    useEffect(() => {
        if (feedbackSaveSuccess) {
          alert('feedback submitted successfully.');
          setfeedback('');
          dispatch({ type: feedback_save });
        }
        
      const submitHandler = (e) => {
        e.preventDefault();
        // dispatch actions
        dispatch(detailsProduct(props.match.params.id));
        return () => {
          //
        };
      }, [feedbackSaveSuccess]);
}    