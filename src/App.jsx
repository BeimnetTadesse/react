import React from 'react';
 
import dog from './dog.jpg';
import './App.css';

function App() {
  return (
    <div className="container ">
      <h1 className="title">JASPER </h1>
      <div className="">
        
        <img src={dog} alt="puppy" className="image" />
        <div>
          <h2 className="text">A cute puppy</h2>
    
        </div>
      </div>
      <p className="paragraph">
      Meet Jasper, the spirited puppy who stole our hearts from the moment he bounded into our lives.
       With his fluffy fur, wagging tail, and boundless energy, Jasper embodies the true essence of joy and playfulness.
        Whether he's chasing after his favorite toy or cuddling up for a nap, his zest for life is contagious, bringing laughter and warmth to our home each day.
         
      </p>
    </div>
  );
}

 

export default App;