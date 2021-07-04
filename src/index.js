const dotenv = require("dotenv");
try {
    dotenv.config();
} catch (err) {
    console.error("Could not read .env file");
}
const { AceBaseServer } = require("acebase-server");
const dbname = process.env.ACE_DB || "mydb";
const server = new AceBaseServer(dbname, {
    host: "0.0.0.0",
    path: process.env.ACE_PATH ?? ".",
    port: process.env.PORT || 5757,
    authentication: {
        enabled: process.env.ACE_AUTH === "true",
        allowUserSignup: process.env.ACE_ALLOW_SIGNUP === "true",
        defaultAccessRule: "auth",
        defaultAdminPassword: process.env.ACE_ADMIN_PASS,
    },
});
server.on("ready", () => {
    console.log("SERVER ready");
});
