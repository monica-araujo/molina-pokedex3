import {HomePage} from '../pages/HomePage'
import {Pokedex} from '../pages/Pokedex'
import {DetailPage} from '../pages/DetailPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <HomePage/>
                </Route>

                <Route exact path={'/pokedex'}>
                    <Pokedex/>
                </Route>

                <Route exact path={'/detalhes'}>
                    <DetailPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}