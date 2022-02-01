import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Filter from './Components/Filter'
import Home from './Components/Home'
import Details from './Components/Details'
import Header from './Components/Header'

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/restaurantsearchpage' component={Filter} />
				<Route path='/restaurantdetailspage' component={Details} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
