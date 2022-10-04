const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: String,
    required: true,
  },
  journal: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  volume: {
    type: Number,
    required: true,
  },
  version: {
    type: Number,
    required: true,
  },
  pages: {
    type: String,
    required: true,
  },
  doi: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  semethod: {
    type: String,
    required: false,
  },
  claim: {
    type: String,
    required: false,
  },
  result: {
    type: Boolean,
    required: true,
  },
  research: {
    type: String,
    required: false,
  },
  participant: {
    type: String,
    required: false,
  },
});

module.exports = Article = mongoose.model('article', ArticleSchema);
