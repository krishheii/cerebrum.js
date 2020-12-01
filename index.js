/*

  MIT License

  Copyright (c) 2020 Krishnanunny H

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

 */

const {
  writeBuiltInMemory,
  updateMemory,
} = require("./CerebrumMemory/CerebrumMemoryWrite.js");
const { readCerebrumMemory } = require("./CerebrumMemory/CerebrumMemoryRead");
const { dockStart } = require("@nlpjs/basic");

module.exports = class Cerebrum {
  constructor() {
    this.modal = null;
  }

  async trainCerebrum(dataset) {
    await writeBuiltInMemory();
    const getMemory = await readCerebrumMemory();
    await updateMemory(getMemory, dataset);
    const dock = await dockStart({ use: ["Basic"] });
    this.modal = dock.get("nlp");
    await this.modal.addCorpus("./cerebrumTrainedData/cerebrumDataSet.json");
    await this.modal.train();
    return "Success";
  }

  async cerebrumReplay(question) {
    const result = await this.modal.process(question);
    return result.answer;
  }
};
