/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {determineWinner, lottoPlaceColorMap} from '../../lib/lotto';

const setRankStyle = ({color}) => {
	return css`
		width: 2rem;
		height: 2rem;
		padding: 0.1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		span {
			font-size: 1.2rem;
			font-weight: 700;
			font-style: italic;
			color: ${color};
		}
	`;
};

const LottoMatcher = ({game}) => {
	const [gameRank, setGameRank] = useState('');
	const {currentTargetGame} = useSelector((state) => state.userLotto);

	useEffect(() => {
		const rank = determineWinner({
			game,
			currentTargetGame,
		});
		setGameRank(rank);
	}, [currentTargetGame, game]);

	return (
		<div css={setRankStyle({color: lottoPlaceColorMap[gameRank]})}>
			<span>{gameRank}</span>
		</div>
	);
};

export default LottoMatcher;
