module.exports = {
  presets: process.env.JEST_WORKER_ID ? ["@babel/preset-env"] : [],
  plugins: [["@babel/plugin-transform-optional-chaining", {}, "uuid-4jd83"]],
};
