
![Cerebrum.js logo](https://i.ibb.co/ZTGr7gQ/cerebrumlogo.png)


> Cerebrum.js is a JavaScript library for Implementing NLP in JavaScript.

[![npm version](https://img.shields.io/badge/npm-v1.0.2-blueviolet)](https://www.npmjs.com/package/cerebrum.js)
[![license](https://img.shields.io/badge/lisence-MIT-blueviolet)](https://www.npmjs.com/package/cerebrum.js)

## Description

Cerebrum.js is a JavaScript library that helps to implement Natural Language Processing in Javascript so quickly. This package could make a Machine Learning beginner do NLP operation in his project so quickly. Cerebrum.js has functions for training the dataset, making modal with the prepared dataset, and getting a conditioned modal response like a human being.

Cerebrum.js mainly used for making chatbots in your JavaScript projects; otherwise, you might require an external API for creating a chatbot or do python integration to implement chatbots. By using Cerebrum.js, it is possible to make a chatbot with your JavaScript project itself with no need for external communication.
#### Environment:

- Node.js

## Basic Usage

Install with npm :

```bash
npm i cerebrum.js
```
Basic usage example below. Note: it does not cover all the available
methods, rather just highlight the main functionality to get up and running with this package. 

#### Step One : 

First, we have to import the package and create an instance of it, and then we prepare the dataset.

```javascript

const Cerebrum = require("cerebrum.js");

const newCerebrum = new Cerebrum();

```

#### Step Two : 
Making the dataset is the second step in implementing Cerebrum into your project. Cerebrum accept dataset as an array of object make sure you have an array length more than three more the data you gave more accurate the model would be. Each object in the array has the following property.

- #### Intent : 
An intent used to classify a group of similar kinds of questions, for example, what's your age, tell me your age and could you please tell your age. Here all this question comes under one context: age, so here the intent is age.

- #### Utterances : 
An array that has only the questions we are required to train into the modal.

- #### Answers :
 An array that has answers to the related question on the utterances array. On each query, a different answer from the array is sent as a response from the modal.

Below an example of a dataset has been given; please refer to it.


```javascript

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

```

#### Step Three : 

Now we have the dataset next step is to train the dataset and make a modal out of it. To do that, we have to call the function trainCerebrum() and pass the dataset as an argument, and it will return success as a response if data got trained and modal has been created. 

```javascript

const train = async () => {
  const response = await newCerebrum.trainCerebrum(dataset);
  return response;
};

```

#### Step Four : 

The final step is to get the response from the created modal for that cerebrumReplay() function is there and pass the question as an argument in string format.

```javascript

const response = async (question) => {
  const answer = await newCerebrum.cerebrumReplay(question);
  return answer;
};
```

All these different steps could have collaborated into a single file for knowing how it works and could test on your local machine. Below we have merged all steps into a single code snippet.

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

// Calling the training function for training the dataset
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

MIT &copy; Krishnanunny H

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.