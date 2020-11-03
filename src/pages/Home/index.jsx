/** @jsx jsx */
import {jsx, css} from '@emotion/core';
import Layout from '../../components/Layout';
import HomeHeader from './HomeHeader';
import HomeBody from './HomeBody';

const homeLayout = css`
	width: 100%;
	min-height: 40%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

export default () => {
	return (
		<Layout>
			<section css={homeLayout}>
				<HomeHeader />
				<HomeBody />
			</section>
		</Layout>
	);
};
