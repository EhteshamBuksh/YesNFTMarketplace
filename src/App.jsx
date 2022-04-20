import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import appStyles from './App.module.css';
import Layout from './components/Layout/Layout';

const HomePage = React.lazy(() => {
  return import('./containers/Home/Home');
});

const ConnectPage = React.lazy(() => {
  return import('./containers/Connect/Connect');
});

const ExplorePage = React.lazy(() => {
  return import('./containers/Explore/Explore');
});

const ProfilePage = React.lazy(() => {
  return import('./containers/Profile/Profile');
});

const CollectionsPage = React.lazy(() => {
  return import('./containers/Collections/Collections');
});

const SettingsPage = React.lazy(() => {
  return import('./containers/Settings/Settings');
});

const LinkPage = React.lazy(() => {
  return import('./containers/Links/Link');
});

const NotificationPage = React.lazy(() => {
  return import('./containers/Notification/Notification');
});

const OfferPage = React.lazy(() => {
  return import('./containers/Offer/Offer');
});

const VerificationPage = React.lazy(() => {
  return import('./containers/Verification/Verification');
});

const SupportPage = React.lazy(() => {
  return import('./containers/Support/Support');
});

const StatsPage = React.lazy(() => {
  return import('./containers/Stats/Stats');
});

const CreatePage = React.lazy(() => {
  return import('./containers/Create/Create');
});

const SellPage = React.lazy(() => {
  return import('./containers/Sell/Sell');
});

const PricePage = React.lazy(() => {
  return import('./containers/Price/Price');
});

const AuctionPage = React.lazy(() => {
  return import('./containers/Auction/Auction');
});

const BlogsPage = React.lazy(() => {
  return import('./containers/Blogs/Blogs');
});

const ActivityPage = React.lazy(() => {
  return import('./containers/Activity/Activity');
});

const CollectionActivityPage = React.lazy(() => {
  return import('./containers/Collectionactivity/Collectionactivity');
});

const GettingDataPage = React.lazy(() => {
  return import('./containers/Gettingdata');
});

const routes = (
  <Routes>
    <Route exact path ='/' element ={<HomePage/>} />
    <Route path = '/connect' element ={<ConnectPage/>}/>
    <Route path = '/explore' element ={<ExplorePage/>}/>
    <Route path = '/profile' element ={<ProfilePage/>}/>
    <Route path = '/collection' element ={<CollectionsPage/>}/>
    <Route path = '/setting' element ={<SettingsPage/>}/>
    <Route path = '/link' element ={<LinkPage/>}/>
    <Route path = '/notific' element ={<NotificationPage/>}/>
    <Route path = '/offer' element ={<OfferPage/>}/>
    <Route path = '/verify' element ={<VerificationPage/>}/>
    <Route path = '/support' element ={<SupportPage/>}/>
    <Route path = '/stats' element ={<StatsPage/>}/>
    <Route path = '/create' element ={<CreatePage/>}/>
    <Route path = '/sell' element ={<SellPage/>}/>
    <Route path = '/price' element ={<PricePage/>}/>
    <Route path = '/auction' element ={<AuctionPage/>}/>
    <Route path = '/blog' element ={<BlogsPage/>}/>
    <Route path = '/activity' element ={<ActivityPage/>}/>
    <Route path = '/collection_activity' element ={<CollectionActivityPage/>}/>
    <Route path = '/get' element = {<GettingDataPage/>} />
  </Routes>
)

const App = () => {
  return (
    <div className={appStyles.App}>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
      </Layout>
    </div>
  );
};

export default App;