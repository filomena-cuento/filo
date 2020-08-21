import React from 'react'
import { 
    BrowserRouter as Router, 
    Switch, 
    Route
} from 'react-router-dom';

import { TitleScreen } from '../components/TitleScreen';
import { TextScreen } from '../components/TextScreen';
import { CompleteTextScreen } from '../components/CompleteTextScreen';
import { CreditsScreen } from '../components/CreditsScreen';

export const AppRouter = () => {
    const background = process.env.PUBLIC_URL + '/assets/img/room-bg.jpg'

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="full-container" style={{backgroundImage: "url(" + background + ")"}}>        
                <Switch>
                    <Route exact path="/" component={ TitleScreen } />
                    <Route exact path="/filomena" component={ TextScreen } />
                    <Route exact path="/cuento" component={ CompleteTextScreen } />
                    <Route exact path="/credits" component={ CreditsScreen } />
                </Switch>
          </div>
        </Router>
      );
}