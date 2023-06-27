
/**
 * <div id="radha-raji">
 *    <div id="prakash-uma">
 *      <h1  id="pratima" > I'm Pratima</h1>
 *       <h2 id="akshara"> I'm Akshara</h2>
 *    </div>
 *   <div id="vengatesh-vimala">
 *      <h1 id="vinish"> I'm Vinish</h1>
 *    </div>
 * 
 * </div>
 * ReactElement(object) => HTML ELEMENT (Browser can understands)
 */
const parent = React.createElement('div', {id:"radha-raji"}, [
    (React.createElement('div', {id:'prakash-uma'}, [
        (React.createElement('h1', {id:'pratima'}, 'I am Pratima')),
        (React.createElement('h2', {id:'akshara'}, 'I am Akshara')),

    ])),
    (React.createElement('div', {id: 'vengatesh-vimala'},(React.createElement("h1", {id:'vinish'}, "I am vinish"))))
])

// const heading = React.createElement("h1", {"class": "header"}, "Hello world App");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
console.log('taheadingg', parent)
