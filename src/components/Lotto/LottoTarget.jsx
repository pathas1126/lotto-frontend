/**@jsx jsx */
import {css, jsx} from '@emotion/core';
import {LottoGame} from './index';

const targetGameStyle = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	& > span {
		width: 100%;
		display: inline-block;
		word-break: keep-all;
		margin-right: 1rem;
		font-weight: 600;
	}
`;
const LottoTarget = ({target, title}) => {
	return (
		<article css={targetGameStyle}>
			<span>{title}: </span>
			<LottoGame game={target} />
		</article>
	);
};

export default LottoTarget;
