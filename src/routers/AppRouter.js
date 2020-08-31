import React, { useState } from 'react'
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
    const [ muted, setMuted ] = useState(true);

    const unmute = () => {
        setMuted(false);
    }

    return (
        <Router basename={process.env.PUBLIC_URL}>

            <audio autoPlay loop muted={ muted }>
                <source src={ process.env.PUBLIC_URL + '/assets/sounds/rain-loop.ogg' }  type="audio/ogg" />
            </audio>

            {/* <iframe title="rain" src={ process.env.PUBLIC_URL + '/assets/sounds/silence.mp3' } allow="autoplay"  style={{display:"none"}} id="iframeAudio">
            </iframe> 

            <audio autoPlay loop>
                <source src={ process.env.PUBLIC_URL + '/assets/sounds/rain-loop.ogg'} type="audio/mp3" />
            </audio> */}


            <div className="full-container" style={{backgroundImage: "url(" + background + ")"}}>        
                <Switch>
                    {/* <Route exact path="/" component={ TitleScreen } /> */}
                    <Route exact path="/" render={(props) => <TitleScreen {...props} unmute={unmute} />} />
                    <Route exact path="/filomena" component={ TextScreen } />
                    <Route exact path="/cuento" component={ CompleteTextScreen } />
                    <Route exact path="/credits" component={ CreditsScreen } />
                </Switch>
          </div>
        </Router>
      );
}
