import React from 'react';
import ReactDOM from 'react-dom/client';
import './3/App.css';
import App from './3/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
            <App name="Pikachu" type="Electric"
                 image="https://images.wikidexcdn.net/mwuploads/wikidex/7/77/latest/20150621181250/Pikachu.png"/>
    </React.StrictMode>
);
