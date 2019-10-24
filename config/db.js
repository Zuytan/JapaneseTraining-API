const DB_USER = "api";
const DB_PASSWORD = "elSyzDUmsmwwQv3c";
const DB_USED = "Production"; // "Development", "Production"
const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@maindb-krbmk.mongodb.net/${DB_USED}?retryWrites=true&w=majority`;
const DB_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };

module.exports = { DB_URL, DB_OPTIONS };
