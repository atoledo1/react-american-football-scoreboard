
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
let [hScore, setH] = useState(0)
let [aScore, setA] = useState(0)
const touchDown = 7
const fieldGoal = 3

return (
<div className="container">
<section className="scoreboard">
<div className="topRow">
<div className="home">
<h2 className="home__name">Lions</h2>

<div className="home__score">{hScore}</div>
</div>
<div className="timer">00:03</div>
<div className="away">
<h2 className="away__name">Tigers</h2>
<div className="away__score">{aScore}</div>
</div>
</div>
<BottomRow/>
</section>
<section className="buttons">
<div className="homeButtons">

<button className="homeButtons__touchdown" onClick={() => setH(hScore += touchDown)}>Home Touchdown</button>
<button className="homeButtons__fieldGoal" onClick={() => setH(hScore += fieldGoal)}>Home Field Goal</button>
</div>
<div className="awayButtons">
<button className="awayButtons__touchdown" onClick={() => setA(aScore += touchDown)}>Away Touchdown</button>
<button className="awayButtons__fieldGoal" onClick={() => setA(aScore += fieldGoal)}>Away Field Goal</button>
</div>
</section>
</div>
);
}
export default App;
