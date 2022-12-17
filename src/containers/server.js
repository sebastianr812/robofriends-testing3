// SSR in react -- we need to have react both in the server and in the 
// browser in order for this to work

import React from 'react';
import express from 'express';
import fs from 'fs';
import { renderToString } from 'react-dom/server'
import App from './App';


const app = express();

app.use(express.static('/public'));

const robots = JSON.parse(fs.readFileSync('/public/robots.json', 'utf-8'))
const RobotFriendsApp = React.createElement(App);

app.get('/', (req, res) => {
    res.render('index', {
        content: renderToString(RobotFriendsApp({ data: robots }))
    })
})
