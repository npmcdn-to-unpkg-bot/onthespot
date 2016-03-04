var uid = require('uid');
var FirebaseTokenGenerator = require("firebase-token-generator");
var tokenGenerator = new FirebaseTokenGenerator("J220jSM2Fx0getdCCjcwTDUIurSH6cPQpqjS2PAM");

module.exports = {
  generate: function(userData){
    return tokenGenerator.createToken({
      uid: uid(10),
      name: userData.name || 'Contestant'
    });
  }
};