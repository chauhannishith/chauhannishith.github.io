import logo from '../assets/gear-96.png'
import '../App.css';

export const MainPage = () => {
  return (
    <div className="App">
      <header className="App-header fade-section is-visible">
        <img src={logo} className="App-logo fade-item fade-item-delay-1" alt="logo from https://icons8.com/icon/102707/gear" />
        <p className='fade-item' style={{ transitionDelay: '180ms' }}>
          This site is still under development.
        </p>
      </header>
    </div>
  );
}

