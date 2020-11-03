import React from 'react';
import {Route} from 'react-router-dom';
import {Home} from './pages';
import GlobalStyle from './components/GlobalStyle';

function App() {
	return (
		<div>
			<GlobalStyle />
			<Route exact path='/' component={Home} />
		</div>
	);
}

export default App;
