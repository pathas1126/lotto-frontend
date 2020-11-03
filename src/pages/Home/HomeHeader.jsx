/**@jsx jsx */
import {css, jsx} from '@emotion/core';
import {CurrentTargetGameInput, LottoTarget} from '../../components/Lotto';
import Timer from '../../components/Timer';
import Button from '../../components/Button';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../components/Loader';

const header = css`
	width: 24rem;
	height: 10%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const title = css`
	font-weight: 600;
	font-size: 1.8rem;
	color: #ffd300;
	text-shadow: 3px 3px 0 #1565c0, 5px 5px 0 #42a5f5;
`;

const LastWinningGameWrapper = css`
	width: inherit;
	min-height: 6rem;
	padding-bottom: 0.5rem;
	margin-bottom: 1rem;
	border-bottom: 3px dashed #16213e;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

const timerWrapper = css`
	margin-top: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const HomeHeader = () => {
	const [viewCustomInput, setViewCustomInput] = useState(false);
	const {currentTargetGame} = useSelector((state) => state.userLotto);
	const {lastWinningGame} = useSelector((state) => state.lotto);

	const fetchingLastWinningGame = useSelector(
		(state) => state.loading.effects.lotto.setLastWinningGameAsync,
	);
	const fetchingCustomTargetGame = useSelector(
		(state) => state.loading.effects.userLotto.setCurrentTargetGameAsync,
	);

	const dispatch = useDispatch();

	const onClickAddCustomGame = () => {
		setViewCustomInput(!viewCustomInput);
	};

	useEffect(() => {
		dispatch.lotto.setLastWinningGameAsync();
	}, [dispatch.lotto]);

	return (
		<header css={header}>
			<article css={LastWinningGameWrapper}>
				{currentTargetGame.length === 0 &&
					lastWinningGame.length > 0 && (
						<LottoTarget
							target={lastWinningGame}
							title='Last Winner'
						/>
					)}
				{currentTargetGame.length > 0 && (
					<LottoTarget target={currentTargetGame} title='Target' />
				)}
				{viewCustomInput && <CurrentTargetGameInput />}
				<Button size='full' onClick={onClickAddCustomGame}>
					{viewCustomInput ? 'Close' : 'Make Custom Target'}
				</Button>
			</article>
			<article css={title}>
				<span>Pick Your Lucky Numbers!</span>
			</article>
			<article css={timerWrapper}>
				<Timer />
			</article>
			{(fetchingCustomTargetGame || fetchingLastWinningGame) && (
				<Loader />
			)}
		</header>
	);
};

export default HomeHeader;
