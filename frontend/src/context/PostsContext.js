import { createContext, useReducer } from "react";

export const PostsContext = createContext();

export const postsReducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        posts: action.payload.postnew,
        error: null,
      };

    case "CREATE_POST":
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        error: null,
      };

    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((p) => p._id !== action.payload._id),
        error: null, // Reset the error state
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, {
    posts: [],
  });

  return (
    <PostsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PostsContext.Provider>
  );
};
