import * as actionTypes from "./types";

export const fetchPosts = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: actionTypes.FETCH_POSTS,
        payload: data,
      })
    );
};

export const createPost = (postData) => (dispatch) => {
  console.log("action called");
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) =>
      dispatch({
        type: actionTypes.NEW_POST,
        payload: post,
      })
    );
};
