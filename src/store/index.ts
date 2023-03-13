import {legacy_createStore as createStore, combineReducers} from 'redux';
import {categoriesReducer} from './categories/reducer';
import {questionsReducer} from './questions/reducer';
import {uiReducer} from './ui/reducer';

export const rootReducer = combineReducers({
    categories: categoriesReducer,
    questions: questionsReducer,
    ui: uiReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
