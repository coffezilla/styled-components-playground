import { MyCardStl, MyCardContentStl } from './MyCard.styled';
import MyCardDescription from '../MyCardDescription/MyCardDescription';
import MyCardImage from '../MyCardImage';

const MyCard = () => {
	return (
		<MyCardStl>
			<MyCardContentStl>
				<MyCardImage />
				<MyCardDescription />
			</MyCardContentStl>
		</MyCardStl>
	);
};
export default MyCard;
