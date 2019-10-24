var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const lesson = new Schema({
  name: String,
  owner: String,
  vocabulary: [
    {
      kana: String,
      kanji: String,
      meanings: [String]
    }
  ]
});
const Lesson = mongoose.model("lessons", lesson);

module.exports = Lesson;
