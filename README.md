# Cerebrum.js

> Cerebrum.js is a JavaScript library for Implementing NLP in JavaScript.

## Description

This package is a javascript implementation of Natural Language Processing.  It includes all functions for the training dataset, making models, and generating replay like a human.

#### Environment:

- Node.js

## Basic Usage

Install with npm :

```bash
npm i cerebrum.js
```
Basic usage example below. _Note: it does not cover all the available
methods, rather just highlights the main functionality to get up and running with this package. 

```javascript
const Cerebrum = require("cerebrum.js");

const newCerebrum = new Cerebrum();

// Dataset for training
const dataset = [
  {
    intent: "agent.creator",
    utterances: ["who build me", "who create me"],
    answers: [
      "You build me",
      "Its You",
      "You created me"
    ]
  },
  {
    intent: "agent.sing",
    utterances: [
      "do you sing song",
      "will you sing song"
    ],
    answers: [
      "Yes I do",
      "Yes I will"
    ],
  },
];

// Calling the training function for training the datase
const train = async () => {
  const response = await newCerebrum.trainCerebrum(dataset);
  return response;
};

train().then((v) => {
  if (v) {
    console.log(v);
  }
});

// Getting the response from trained model
const response = async (question) => {
  const answer = await newCerebrum.cerebrumReplay(question);
  return answer;
};

setTimeout(function () {
  response("who build me").then((v) => {
    if (v) {
      console.log(v);
    }
  });
}, 3000);

setTimeout(function () {
  response("who build me").then((v) => {
    if (v) {
      console.log(v);
    }
  });
}, 6000);
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)