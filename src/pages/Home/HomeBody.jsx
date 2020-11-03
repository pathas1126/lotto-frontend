/**@jsx jsx */
import {css, jsx} from '@emotion/core';
import {LottoRandomGames, LottoCustomGames} from '../../components/Lotto';

const homeBody = css`
	width: 50%;
	margin-top: 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const HomeBody = () => {
	return (
		<div css={homeBody}>
			<LottoRandomGames />
			<LottoCustomGames />
		</div>
	);
};

export default HomeBody;
