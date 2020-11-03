/**@jsx jsx */
import {jsx, css} from '@emotion/core';

const setStyle = ({color, size, shape}) => {
	let height = '';
	let width = '';
	let radius = '';
	let background = '';

	switch (size) {
		case 'small':
			width = '2rem';
			height = '1rem';
			break;
		case 'normal':
			width = '4rem';
			height = '2rem';
			break;
		case 'big':
			width = '8rem';
			height = '4rem';
			break;
		case 'full':
			width = '100%';
			height = '100%';
			break;
		default:
			break;
	}

	switch (shape) {
		case 'square':
			width = height;
			radius = '0.3rem';
			break;
		case 'circle':
			width = height;
			radius = '100%';
			break;
		default:
			width = height;
			break;
	}

	switch (color) {
		case 'primary':
			background = '#008CBA';
			break;
		case 'secondary':
			background = '#f44336';
			break;
		case 'tertiary':
			background = '#d3d3d3';
			break;
		default:
			break;
	}

	return css`
		width: ${width};
		height: ${height};
		padding: 0.5rem;
		background: ${background};
		border: none;
		border-radius: ${radius};
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 0.25rem 0.3rem rgba(59, 43, 91, 0.7);
		outline: none;
		&:hover {
			cursor: pointer;
		}
		&:active {
			transform: scale(0.99);
		}
		span {
			color: #fff;
			font-weight: 600;
		}
	`;
};
const Button = ({
	color = 'primary',
	size = 'normal',
	shape = 'square',
	children,
	onClick,
	type = 'button',
	disabled = false,
}) => {
	if (disabled)
		return (
			<button
				css={setStyle({
					color: 'tertiary',
					size,
					shape,
					cursor: 'not-allowed',
				})}
				type={type}
				disabled={true}
			>
				{children}
			</button>
		);

	return (
		<button
			css={setStyle({color, size, shape})}
			onClick={onClick}
			type={type}
		>
			<span>{children}</span>
		</button>
	);
};

export default Button;
