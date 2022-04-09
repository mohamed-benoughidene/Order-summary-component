import hero from './images/illustration-hero.svg';
import icon from './images/icon-music.svg'
function App() {
  return (
    <div className="App" role="main">
      <div className="card">

 <img src={hero} alt="" />
     <div className="content"> 
         <h1>Order Summary</h1>
         <p className="header-p"> You can now listen to millions of songs, audiobooks, and podcasts on any 
  device anywhere you like!</p>
     </div>

<div className="price-tag">
  <div className="price">
    <img src={icon} alt="" className="music"/>
    <p className="price-p"> Annual Plan <br />
    <span className="plan"> $59.99/year</span>
 </p>
  </div>
  <a href="">Change</a>
    </div>

<div className="buttons">
<button className="btn-primary">Proceed to Payment</button>
<button className="btn-secondary"> Cancel Order</button>
</div>
      </div>
      <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://www.frontendmentor.io/profile/mohamed-benoughidene">@mohamed-benoughidene
</a>.
</div>
    </div>
  );
}

export default App;
