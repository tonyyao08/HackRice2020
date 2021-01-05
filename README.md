# HackRice2020 BLM Timeline
### *Take a step into the history of the Black Lives Matter movement with an interactive timeline highlighting major events related to BLM over the past 5 years.*

## Inspiration
After the George Floyd shooting, reddit users compiled a GitHub repository of information on incidents of police brutality. We wanted to create a website that could be used as a starting-point resource to those who wished to learn more about events related to BLM and help raise social awareness.

## What it does
BLM Timeline is an interactive, single-page website. [You can visit our finished website here.](http://www.ironak.com/blmtimeline/main.html#page1)

## How we built it
We sourced our data from a Github repository dedicated to documenting incidents of police brutality after George Floyd’s shooting. We first wrote a script in JavaScript that goes through over 1000 events in the raw JSON file, matching relevant items and sorting it chronologically. We also modified/customized an existing JavaScript plugin to take in our data and transform it into interactive events timelines, which we then integrated onto a fullpage, responsive website built using the Vue.js framework. This project as a whole was built using Visual Studio Code using a plugin that allowed us to all edit the code together in real time under one primary account.

## Challenges we ran into
- Understanding, implementing, and customizing the Vue.js framework
- Modifying an existing plugin to work with our data format
- Integrating various components into a single, cohesive fullpage website (dealing with multiple stylesheets, scripts, etc.)

## Accomplishments that we're proud of
- Successfully parsing and converting messy data into a more useful format
- Integration of various technologies (frameworks, plugins, etc.) into a single project
- Learning new things and having fun (despite being frustrated every half hour)

## What we learned
Throughout this project, we had the opportunity to explore tools for web development, such as D3.js and the aforementioned Vue.js. We also got a chance to practice data cleaning and working with JSON files and jQuery methods.

## What's next for BLM Timeline
We hope to continue updating the timeline should there be any new events related to the Black Lives Matter movement in the future, and we also hope to expand on the ways our users can help make a change themselves.

## Built With
- css
- d3.js
- html
- javascript
- jquery
- moment.js
- vue.js
- figma
