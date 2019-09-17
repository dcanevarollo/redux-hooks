import { createStore } from 'redux';

import rootReducer from './reducers';

/**
 * Exporta o store criado pelo Redux para os demais componentes.
 */
export default createStore(rootReducer);
