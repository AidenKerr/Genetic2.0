(this["webpackJsonpgenetic-v2"]=this["webpackJsonpgenetic-v2"]||[]).push([[0],{265:function(e,t,n){},266:function(e,t,n){},267:function(e,t,n){},268:function(e,t,n){},272:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(88),l=n.n(r),o=(n(97),n(16)),s=n(17),u=n(10),c=n(34),h=n(33),d=(n(98),n(89)),v=n(90),m=(n(265),function(e){Object(c.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleColorChange=a.handleColorChange.bind(Object(u.a)(a)),a.handleReset=a.handleReset.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=parseInt(t.value),a=t.name,i=Object(d.a)({},a,n);this.props.onControlPanelChange(i)}},{key:"handleColorChange",value:function(e){var t={optimal:e.rgb};this.props.onControlPanelChange(t)}},{key:"handleReset",value:function(){this.props.onControlPanelChange({generations:[]})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onControlPanelSubmit()}},{key:"render",value:function(){return i.a.createElement("div",{className:"ControlPanel"},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("label",null,"Population Size:",i.a.createElement("input",{name:"popSize",type:"number",value:this.props.popSize,onChange:this.handleChange,min:"2"})),i.a.createElement("br",null),i.a.createElement("label",null,"Death Cutoff:",i.a.createElement("input",{name:"deathCutoff",type:"number",value:this.props.deathCutoff,onChange:this.handleChange})),i.a.createElement("br",null),i.a.createElement("label",null,"Max Generations:",i.a.createElement("input",{name:"maxGens",type:"number",value:this.props.maxGens,onChange:this.handleChange})),i.a.createElement("br",null),i.a.createElement("label",null,"Display Every:",i.a.createElement("input",{name:"displayInterval",type:"number",value:this.props.displayInterval,onChange:this.handleChange,min:"1"})),i.a.createElement("br",null),i.a.createElement("label",{className:"colorPicker"},"Optimal Color:",i.a.createElement(v.ChromePicker,{className:"chromePicker",color:this.props.optimal,onChange:this.handleColorChange,disableAlpha:!0})),i.a.createElement("br",null),i.a.createElement("input",{type:"submit",value:"Start"}),i.a.createElement("br",null),i.a.createElement("input",{type:"button",value:"Reset",onClick:this.handleReset})))}}]),n}(i.a.Component)),p=(n(266),n(267),n(12)),g=n.n(p);var f=function(e){var t=g()(e.mommy.value).hex(),n=g()(e.daddy.value).hex(),a=g()(e.child.value).hex();return i.a.createElement("div",{className:"container"},i.a.createElement("div",null,i.a.createElement("div",{className:"individual",style:{backgroundColor:t}},e.mommy.fitness),i.a.createElement("div",{className:"individual",style:{backgroundColor:n}},e.daddy.fitness)),i.a.createElement("div",null,"\u2192"),i.a.createElement("div",null,i.a.createElement("div",{className:"individual",style:{backgroundColor:a}},e.child.fitness)))};var b=function(e){var t=e.population,n=t.individuals.map((function(e){return i.a.createElement(f,{mommy:e.mommy,daddy:e.daddy,child:e})}));return i.a.createElement("div",{className:"Population"},"Generation: ",t.generation,i.a.createElement("div",{className:"PopulationList"},n))};var C=function(e){var t=e.population.individuals.map((function(e){var t=g()(e.value).hex();return i.a.createElement("div",{className:"container",style:{backgroundColor:t}},e.fitness)}));return i.a.createElement("div",{className:"Population"},"Initial Population",i.a.createElement("div",{className:"PopulationList"},t))};n(268);var y=function(e){var t=e.generations.filter((function(t){return t.generation%e.displayInterval===0})).map((function(e){return 0===e.generation?i.a.createElement(C,{key:e.generation.toString(),population:e}):i.a.createElement(b,{key:e.generation.toString(),population:e})}));return t[0]?i.a.createElement("div",null,i.a.createElement("hr",null),i.a.createElement("div",{className:"Generations"},t)):null},E=n(91),k=n.n(E),I=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"getRandomInt",value:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},{key:"newColor",value:function(){return{r:this.getRandomInt(0,255),g:this.getRandomInt(0,255),b:this.getRandomInt(0,255)}}},{key:"convertToLab",value:function(e){var t=g()(e).labObject();return{L:t.l,A:t.a,B:t.b}}},{key:"calculateFitness",value:function(e,t){var n=this.convertToLab(e),a=this.convertToLab(t);return(100-k.a.getDeltaE00(n,a)).toFixed(1)}},{key:"generateStartingPop",value:function(e,t){for(var n={generation:0,individuals:[]},a=0;a<e;a++){var i=this.newColor();n.individuals.push({value:i,fitness:this.calculateFitness(i,t)})}return n}},{key:"nextGen",value:function(e,t,n,a){var i=this.death(e,a),r=this.selection(i,t);return i=this.crossover(r,n),i=this.mutation(i),i=this.updateCounter(i),i}},{key:"death",value:function(e,t){return e.individuals=e.individuals.filter((function(e){return e.fitness>=t})),e}},{key:"selection",value:function(e,t){for(var n={generation:e.generation,pairs:[]},a=e.individuals,i=0;i<t;i++){var r=[],l=this.randWeightedInd(a);r.push(l);var o=void 0;do{o=this.randWeightedInd(a),r[1]=o}while(o===r[0]);n.pairs.push(r)}return n}},{key:"randWeightedInd",value:function(e){for(var t=e.map((function(e){return parseInt(e.fitness)})).reduce((function(e,t){return e+t})),n=this.getRandomInt(0,t),a=0;a<e.length;a++){if(n<e[a].fitness)return e[a];n-=e[a].fitness}return console.log("reached end in weightedInd, defaulting to last element"),e[e.length-1]}},{key:"crossover",value:function(e,t){for(var n={generation:e.generation,individuals:[]},a=0;a<e.pairs.length;a++){var i=this.mate(e.pairs[a],t);n.individuals.push(i)}return n}},{key:"mate",value:function(e,t){var n=e[0],a=e[1],i=this.colorToGene(n.value),r=this.colorToGene(a.value),l=this.getRandomInt(1,8),o=i.substring(0,l)+r.substring(l),s=this.geneToColor(o);return{value:s,fitness:this.calculateFitness(s,t),mommy:{value:n.value,fitness:n.fitness},daddy:{value:a.value,fitness:a.fitness}}}},{key:"colorToGene",value:function(e){return this.pad(e.r)+this.pad(e.g)+this.pad(e.b)}},{key:"pad",value:function(e){for(var t=e.toString(),n=t.length;n<3;n++)t="0"+t;return t}},{key:"geneToColor",value:function(e){return{r:parseInt(e.substring(0,3)),g:parseInt(e.substring(3,6)),b:parseInt(e.substring(6,9))}}},{key:"mutation",value:function(e){for(var t=0;t<e.individuals.length;t++){var n=e.individuals[t];if(Math.random()<.01){var a=Math.random()<.5?-1:1,i=this.getRandomInt(0,2),r=Math.round(this.rand_bm(0,255,5));switch(i){case 0:n.value.r=n.value.r+r*a;break;case 1:n.value.g=n.value.b+r*a;break;case 2:n.value.b=n.value.b+r*a}}}return e}},{key:"rand_bm",value:function(e,t,n){for(var a=0,i=0;0===a;)a=Math.random();for(;0===i;)i=Math.random();var r=Math.sqrt(-2*Math.log(a))*Math.cos(2*Math.PI*i);return((r=r/10+.5)>1||r<0)&&(r=this.rand_bm(e,t,n)),r=Math.pow(r,n),r*=t-e,r+=e}},{key:"updateCounter",value:function(e){return{generation:e.generation+1,individuals:e.individuals}}}]),e}(),S=function(e){Object(c.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).alg=new I,a.state={popSize:20,deathCutoff:5,maxGens:15,displayInterval:5,optimal:a.alg.newColor(),generations:[]},a.handleControlPanelChange=a.handleControlPanelChange.bind(Object(u.a)(a)),a.handleControlPanelSubmit=a.handleControlPanelSubmit.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"handleControlPanelChange",value:function(e){this.setState(e)}},{key:"handleControlPanelSubmit",value:function(e){var t=this;this.setState({generations:[this.alg.generateStartingPop(this.state.popSize,this.state.optimal)]}),this.genInterval=setInterval((function(){return t.nextGen()}),0)}},{key:"nextGen",value:function(){var e=this.state.generations,t=e[e.length-1];if(t.generation>=this.state.maxGens)clearInterval(this.genInterval);else{var n=this.state.popSize,a=this.state.optimal,i=this.state.deathCutoff,r=this.alg.nextGen(t,n,a,i);e.push(r),this.setState({generations:e})}}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(m,{popSize:this.state.popSize,deathCutoff:this.state.deathCutoff,maxGens:this.state.maxGens,displayInterval:this.state.displayInterval,optimal:this.state.optimal,onControlPanelChange:this.handleControlPanelChange,onControlPanelSubmit:this.handleControlPanelSubmit}),i.a.createElement(y,{generations:this.state.generations,displayInterval:this.state.displayInterval}))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,n){e.exports=n(272)},97:function(e,t,n){},98:function(e,t,n){}},[[92,1,2]]]);
//# sourceMappingURL=main.dd6227b2.chunk.js.map