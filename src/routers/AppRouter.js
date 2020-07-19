import React from 'react'
import { 
    BrowserRouter as Router, 
    Switch, 
    Route
} from 'react-router-dom';

import { TitleScreen } from '../components/TitleScreen';
import { InteractiveTextScreen } from '../components/InteractiveTextScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>        
                <Switch>
                    <Route exact path="/" component={ TitleScreen } />
                    <Route exact path="/filomena" component={ InteractiveTextScreen } />
                </Switch>
          </div>
        </Router>
      );
}
