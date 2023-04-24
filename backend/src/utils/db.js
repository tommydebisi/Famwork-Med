const mongoose = require("mongoose");
class DBClient {
  constructor() {
    this._username = process.env.DB_USERNAME;
    this._password = process.env.DB_PASSWORD;
    this._db = process.env.DB_NAME;

    this.mongo = mongoose.connect(
      `mongodb+srv://${this._username}:${this._password}@cluster0.qiavl2d.mongodb.net/${this._db}`
      //'mongodb://127.0.0.1:27017/product '
    );
  }

  /**
   * gets one row in the db that match the object passed
   * @param {mongoose.Schema} schema - db schema to query
   * @param {object} obj - obj to search for in db
   * @returns object in db if present else null
   */
  async getSchemaOne(schema, obj) {
    return schema.findOne(obj);
  }

  /**
   * gets all document that matches the given attribute name
   * @param {mongoose.Schema} schema - db schema to query
   * @param {object} attribute - attribute to search
   * @param {object} fields - explicit contents of the document
   * @returns object in db if present else null
   */
  async filterSchemaByAttribute(schema, attribute, fields) {
    return schema.find(attribute, fields);
  }
}
const dbClient = new DBClient();
module.exports = dbClient;
