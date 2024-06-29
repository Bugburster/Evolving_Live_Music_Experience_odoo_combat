import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import PrivateRoute from './components/Auth/PrivateRoute';
import UserProfile from './components/UserDashboard/UserProfile';
import TicketPurchase from './components/UserDashboard/TicketPurchase';
import LiveStream from './components/UserDashboard/LiveStream';
import CreatorProfile from './components/CreatorDashboard/CreatorProfile';
import MusicUpload from './components/CreatorDashboard/MusicUpload';
import LiveStreamManager from './components/CreatorDashboard/LiveStreamManager';
import MusicFilter from './components/MusicSearch/MusicFilter';
import SearchResults from './components/MusicSearch/SearchResults';
import TicketingForm from './components/Ticketing/TicketingForm';
import LiveComments from './components/LiveComments/LiveComments';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/auth/login" component={Login} />
                <Route path="/auth/signup" component={Signup} />
                <PrivateRoute path="/user/profile" component={UserProfile} />
                <PrivateRoute path="/user/ticket-purchase" component={TicketPurchase} />
                <PrivateRoute path="/user/live-stream" component={LiveStream} />
                <PrivateRoute path="/creator-dashboard/creator-profile" component={CreatorProfile} />
                <PrivateRoute path="/creator-dashboard/music-upload" component={MusicUpload} />
                <PrivateRoute path="/creator-dashboard/live-stream-manager" component={LiveStreamManager} />
                <PrivateRoute path="/music-search/music-filter" component={MusicFilter} />
                <PrivateRoute path="/music-search/search-results" component={SearchResults} />
                <PrivateRoute path="/ticketing/ticketing-form" component={TicketingForm} />
                <PrivateRoute path="/live-comments/live-comments" component={LiveComments} />
                <Route path="/" component={Login} />
            </Switch>
        </Router>
    );
};

export default App;