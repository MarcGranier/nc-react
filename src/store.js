import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { campsitesReducer }from '../features/campsites/campsitesSlice';
import { commentsReducer }from '../features/comments/commentsSlice';
import { partnerReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import {userReducer} from '../features/user/userSlice';


export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer,
    promotions: promotionsReducer,
    partners: partnerReducer, 
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

