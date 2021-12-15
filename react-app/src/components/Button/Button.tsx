import { ButtonStl } from './Button.styled';

interface IProps {
	theme: {
		buttonColor: string;
	};
}

const Button = ({ theme }: IProps) => {
	return (
		<ButtonStl type="button" status={theme.buttonColor}>
			ADD TO CART
		</ButtonStl>
	);
};
export default Button;
