import './App.css';
import Plot from 'react-plotly.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      />
      </header>
    </div>
  );
}

export default App;
