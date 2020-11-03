/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import {useEffect, useState} from 'react';

const loaderWrapper = css`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.2);
`;

const loaderFontWrapper = css`
	width: 10rem;
	height: 10rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fefefe;
	border-radius: 100%;
	box-shadow: 0 0.25rem 0.3rem rgba(59, 43, 91, 0.7);
`;

const loaderFont = css`
	font-size: 1.5rem;
	font-weight: 600;
	color: #9a0a9a;
`;

const Loader = () => {
	const [dots, setDots] = useState('..');

	useEffect(() => {
		const timer = setInterval(() => {
			setDots((prevDots) => {
				const max = 5;
				if (prevDots.length === max) return '..';
				return prevDots + '.';
			});
		}, 200);

		return () => clearInterval(timer);
	}, []);

	return (
		<article css={loaderWrapper}>
			<div css={loaderFontWrapper}>
				<span css={loaderFont}>Loading{dots}</span>
			</div>
		</article>
	);
};

export default Loader;
