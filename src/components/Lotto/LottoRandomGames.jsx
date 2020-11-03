/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import {useDispatch, useSelector} from 'react-redux';
import {LottoGame} from '../../components/Lotto';
import Button from '../../components/Button';
import {MdRefresh} from 'react-icons/md';
import {popup} from '../../components/Lotto/LottoGame';
import Loader from '../../components/Loader';
import {useCallback, useState} from 'react';
import LottoMatcher from './LottoMatcher';

const randomGameWrapper = css`
	margin-top: 3rem;
`;

const lineWrapper = css`
	margin-top: 0.725rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const lottoMatcherWrapper = css`
	margin-right: 5px;
`;

const refreshWrapper = css`
	margin-left: 5px;
	animation: ${popup} 0.7s ease;
	position: relative;
`;

const iconStyle = css`
	margin-top: 4px;
	margin-right: 1px;
	transition: ease-in 0.1s;
	&:active {
		transform: rotate(90deg);
	}
`;

const buttonWrapper = css`
	width: 100%;
	min-width: 10rem;
`;

const LottoRandomGames = () => {
	const {
		lottoGames,
		changeGameAsyncError,
		lottoGamesAsyncError,
	} = useSelector((state) => state.lotto);
	const {currentTargetGame} = useSelector((state) => state.userLotto);

	const [isClicked, setIsClicked] = useState(false);

	const dispatch = useDispatch();

	const changeGameAsyncLoading = useSelector(
		(state) => state.loading.effects.lotto.changeGameAsync,
	);
	const lottoGamesAsyncLoading = useSelector(
		(state) => state.loading.effects.lotto.setLottoGamesAsync,
	);

	const changeGame = (index) => dispatch.lotto.changeGameAsync(index);

	const createSetOnClick = useCallback(() => {
		if (!isClicked) setIsClicked(true);
		dispatch.lotto.setLottoGamesAsync();
	}, [isClicked, dispatch.lotto]);

	return (
		<div css={randomGameWrapper}>
			<article css={buttonWrapper}>
				<Button size='full' onClick={createSetOnClick}>
					{!isClicked && <span>Pick One Set</span>}
					{isClicked && <span>Once More?</span>}
				</Button>
			</article>
			{lottoGames.length > 0 &&
				lottoGames.map((game, index) => (
					<div key={index} css={lineWrapper}>
						{currentTargetGame.length > 0 && (
							<div css={lottoMatcherWrapper}>
								<LottoMatcher game={game} />
							</div>
						)}
						<LottoGame game={game} />
						<div css={refreshWrapper}>
							<Button
								shape='circle'
								onClick={() => changeGame(index)}
							>
								<MdRefresh css={iconStyle} size={24} />
							</Button>
						</div>
					</div>
				))}
			{(changeGameAsyncLoading || lottoGamesAsyncLoading) && <Loader />}
			{changeGameAsyncError && <span>{changeGameAsyncError}</span>}
			{lottoGamesAsyncError && <span>{lottoGamesAsyncError}</span>}
		</div>
	);
};

export default LottoRandomGames;
