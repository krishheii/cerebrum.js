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
