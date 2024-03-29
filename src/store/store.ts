import { configureStore } from '@reduxjs/toolkit';
import { userSliceReducer } from './user/userSlice';
import { modalSliceReducer } from './modal/modalSlice';

export const store = configureStore({
  reducer: {
    userSlice: userSliceReducer,
    modalSlice: modalSliceReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch