import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import MissionCard from './components/MissionCard';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Missions />
        <MissionCard
          name=""
          year=""
          country=""
          destination=""
        />
        <Title headline="" />
      </div>
    );
  }
}

export default App;
