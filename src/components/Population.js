import React from 'react';
import '../components/Population.css';
import Family from "./Family";

function Population(props) {
    const pop = props.population;

    const listPop = pop.individuals.map((individual) =>
        <Family
            mommy={individual.mommy}
            daddy={individual.daddy}
            child={individual}
        />
    );

    return (
        <div className="Population">
            Generation: {pop.generation}
            <div className="PopulationList">
                {listPop}
            </div>
        </div>
    );
}

export default Population;