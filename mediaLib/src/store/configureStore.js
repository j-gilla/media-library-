import { createStore, applyMiddleware } from 'redux';
import { createSageMiddleware } from 'redux-saga';
import { rootReducer } from '../reducers';
import { rootSage } from '../sagas';

const configureStore = () => {
  const sageMiddleware = createSageMiddleware();
    return {
      ...createStore(rootReducer,
      applyMiddleware(sageMiddleware)),
      runSaga: sageMiddleware.run(rootSage)
    };
};

export default configureStore;
