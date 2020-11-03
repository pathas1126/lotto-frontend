import {request} from '../../lib/request';
import {methodEnum, statusEnum} from '../../lib/apiConstant';

const userLotto = {
	state: {
		currentTargetGame: [],
		userGames: [],
		userLottoAsyncError: '',
	},
	reducers: {
		setCurrentTargetGame(state, currentTargetGame) {
			state.currentTargetGame = currentTargetGame;
			return state;
		},
		setUserLottoAsyncError(state, errorMessage) {
			state.userLottoAsyncError = errorMessage;
		},
	},
	effects: (dispatch) => ({
		async setCurrentTargetGameAsync(customGame, rootState) {
			const response = await request({
				url: '/lotto/game/custom',
				method: methodEnum.POST.value,
				data: {customGame: customGame},
			});

			const {status} = response;

			if (status === statusEnum.SUCCESS.value) {
				const {customGame} = response.result;
				dispatch.userLotto.setCurrentTargetGame(customGame);
			} else {
				const {message} = response.result;
				dispatch.userLotto.setUserLottoAsyncError(message);
				console.warn(']=== Set Current Target Game POST Error ===[');
			}
		},
	}),
};
export default userLotto;
