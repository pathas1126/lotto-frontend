import {init} from '@rematch/core';
import * as models from './models';
import immerPlugin from '@rematch/immer';
import loadingPlugin from '@rematch/loading';

const store = init({
	models,
	plugins: [immerPlugin(), loadingPlugin()],
});

export default store;
