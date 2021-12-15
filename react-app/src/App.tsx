import GlobalStyles from './components/Global';
import MyCard from './components/MyCard';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<div className="app">
				<MyCard />
			</div>
		</>
	);
};

export default App;
