/**@jsx jsx */
import {jsx, css} from '@emotion/core';
const layout = css`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(#e66465, #9198e5);
`;

const Layout = ({children}) => {
	return <div css={layout}>{children}</div>;
};

export default Layout;
