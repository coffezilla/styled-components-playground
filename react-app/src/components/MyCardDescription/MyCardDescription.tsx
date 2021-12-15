import { MyCardDescriptionStl } from './MyCardDescription.styled';

import Button from '../Button';

const theme = {
	buttonColor: 'blue',
};

const MyCardDescription = () => {
	return (
		<MyCardDescriptionStl>
			<h1>NIKE EPIC REACT FLYKNIT</h1>
			<h2>R$ 120</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis et quod aspernatur nobis
				soluta hic molestiae nihil consequatur assumenda rerum quisquam sequi debitis accusantium
				eaque facere, magni ab, similique commodi.
			</p>
			<Button theme={theme} />
		</MyCardDescriptionStl>
	);
};

export default MyCardDescription;
