/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import Button from '../Button';
import {useState} from 'react';
import {LottoCustomGameInputs} from './index';

const customGamesWrapper = css`
	margin-top: 3rem;
`;

const buttonWrapper = css`
	min-width: 10rem;
`;

const LottoCustomGames = () => {
	const [areInputsVisible, setAreInputsVisible] = useState(true);

	const onClickToggleInputs = () => setAreInputsVisible(!areInputsVisible);
	return (
		<section css={customGamesWrapper}>
			<article css={buttonWrapper}>
				<Button
					size='full'
					color='secondary'
					onClick={onClickToggleInputs}
				>
					{!areInputsVisible && <span>Input Custom Games</span>}
					{areInputsVisible && <span>Close</span>}
				</Button>
			</article>
			{areInputsVisible && <LottoCustomGameInputs />}
		</section>
	);
};

export default LottoCustomGames;
