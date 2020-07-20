import React from 'react';
import './App.css';
import ControlPanel from "./components/ControlPanel";
import Generations from "./components/Generations";
import Algorithm from "./algorithm/Algorithm";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.alg = new Algorithm();

        this.state = {
            popSize: 20,
            deathCutoff: 5, // determines min fitness to survive
            maxGens: 15, // prevent infinite loops (hopefully less necessary once convergence is written)
            optimal: this.alg.newColor(),    // Optimal individual in environment (in RGB, but converted to LAB for fitness calculation)
            generations: [],
        }

        this.handleControlPanelChange = this.handleControlPanelChange.bind(this);
        this.handleControlPanelSubmit = this.handleControlPanelSubmit.bind(this);
    }


    handleControlPanelChange(state) {
        this.setState(state);
    }

    handleControlPanelSubmit(event) {
        this.setState({
            generations: [this.alg.generateStartingPop(this.state.popSize, this.state.optimal)],
        });

        this.genInterval = setInterval(
            () => this.nextGen(),
            10,
        );
    }

    nextGen() {
        const gens = this.state.generations;
        const prevGen = gens[gens.length - 1];

        // stop after max number of generations
        if (prevGen.generation >= this.state.maxGens) {
            clearInterval(this.genInterval);
            return;
        }

        const popSize = this.state.popSize;
        const optimal = this.state.optimal;
        const deathCutoff = this.state.deathCutoff;


        const nextGen = this.alg.nextGen(prevGen, popSize, optimal, deathCutoff);
        gens.push(nextGen);
        this.setState({
            generations: gens,
        });
    }

    render() {
        return (
            <div className="App">
                <ControlPanel
                    popSize={this.state.popSize}
                    deathCutoff={this.state.deathCutoff}
                    maxGens={this.state.maxGens}
                    optimal={this.state.optimal}
                    onControlPanelChange={this.handleControlPanelChange}
                    onControlPanelSubmit={this.handleControlPanelSubmit}
                />
                <Generations
                    generations={this.state.generations}
                />
            </div>
        );
    }
}

export default App;
