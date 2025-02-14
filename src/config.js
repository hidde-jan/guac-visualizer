const console = require("node:console");

function getGuacQlServerUrl() {
  let url = process.env.GUACGQL_SERVER_URL;
  url = url.trim();
  while (url.length > 0 && url.endsWith("/")) {
    url = url.substring(0, url.length - 1);
  }
  console.log("Using GUACGQL_SERVER_URL=" + url);
  return url;
}

const GUACGQL_SERVER_URL = getGuacQlServerUrl();

module.exports = {
  GUACGQL_SERVER_QUERY_URL: new URL(GUACGQL_SERVER_URL + "/query"),
  GUACGQL_SERVER_VERSION_URL: new URL(GUACGQL_SERVER_URL + "/version"),
  GUACGQL_PROXY_PATH: "/api/graphql",
};
