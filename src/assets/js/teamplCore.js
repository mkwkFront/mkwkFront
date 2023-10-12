/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
webviewBridge
  .registerCallbackFunc(webviewBridgelistener, 'jtpltMQCq8Y5lVQHepuIAQ==')
  .then((result) => {
    console.log('MKTeamplCore.ts', result);
  });
const isJsonString = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
async function webviewBridgelistener(data) {
  if (data && data.type != 'webpackWarnings') {
    console.log('native로부터 도착!!');
    console.log(data);
  }
}

export default {
  install(Vue) {
    webviewBridgelistener;
  },
};
