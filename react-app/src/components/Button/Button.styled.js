import styled from 'styled-components';

export const ButtonStl = styled.button`
	border: none;
	color: white;
	background-color: ${({ status }) => status};
	padding: 1rem;
	width: 100%;
	display: inline-block;
	transition: background-color 0.3s;
	cursor: pointer;
	box-shadow: -1px 3px 11px 0px #0600ff42;

	&:hover {
		background-color: rgb(87, 87, 255);
	}
`;
