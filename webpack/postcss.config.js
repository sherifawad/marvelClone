

module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      browsers: ["last 2 versions", "> 0.05%", "IE 7"],
      stage: 0,
    },
    cssnano: process.env.NODE_ENV === "production" ? {} : false
  }
};

// "browserslist": {
//   "production": [
//     ">0.2%",
//     "not dead",
//     "not op_mini all"
//   ],
//   "development": [
//     "last 1 chrome version",
//     "last 1 firefox version",
//     "last 1 safari version"
//   ]
// },
