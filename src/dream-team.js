const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let teamName = '';
  let withOutWhiteSpace = [];
  if (Array.isArray(members)){
    for (let i = 0; i < members.length; i++){
      if (typeof(members[i]) === 'string'){
        withOutWhiteSpace[i] = members[i].split(' ').join('').toUpperCase();
      } else {
        continue;
      };
    };
    let sortedMembers = withOutWhiteSpace.sort();
    for (let i = 0; i < sortedMembers.length; i++){
      if (typeof(sortedMembers[i]) === 'string'){
        teamName = `${teamName}${sortedMembers[i][0]}`;
      } else {
        continue;
      };
    };
    return teamName;
  } else {
    return false;
  };
};

