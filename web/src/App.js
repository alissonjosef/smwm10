import React from 'react';

import './global.css';
import './App.css';

function App() {
  return (
    <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <form>
            <div className="input-block">            
            <label htmlFor="github_username">Usuario do Github</label>
            <input name="github_username" id="github_username" required />
            </div>

            <div className="input-block">              
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
            </div>

            <div className="input-group">
            <label htmlFor="Latitude">Latitude</label>
            <input name="Latitude" id="Latitude" required />
            </div>

            <div className="input-group">
            <label htmlFor="Longitude">Longitude</label>
            <input name="Longitude" id="Longitude" required />
            </div>

          </form>

        <button type="submit">Salva</button>

        </aside>
        <main>

        </main>
    </div>
  );
}

export default App;
