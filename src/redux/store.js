import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { contactsReducer, filterReducer } from './reducer';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';

// const reducers = combineReducers({
//   contacts: persistReducer(
//     {
//       key: 'contacts',
//       storage,
//     },
//     contactsReducer
//   ),
//   filter: filterReducer,
// });

// export const store = configureStore({
//   reducer: reducers,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['contacts'],
};
const reducers = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
// const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  //   reducer: _persistedReducer,
  reducer: persistReducer(persistConfig, reducers),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
