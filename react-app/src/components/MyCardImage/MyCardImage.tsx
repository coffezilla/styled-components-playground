import { MyCardImageStl, MyCardImageInfoStl } from './MyCardImage.styled';

import RibbonStatus from '../RibbonStatus/RibbonStatus';

const MyCardImage = () => {
	return (
		<MyCardImageStl
			style={{
				backgroundImage:
					'url(https://images.samsung.com/uk/smartphones/galaxy-z-flip3-5g/buy/02_Carousel/01-Main/zflip3_carousel_marketingsinglekv_mo.jpg)',
			}}
		>
			<MyCardImageInfoStl>
				<h3>Imagem do produto</h3>
				<RibbonStatus />
			</MyCardImageInfoStl>
		</MyCardImageStl>
	);
};

export default MyCardImage;
