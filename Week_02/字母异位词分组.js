
var groupAnagrams = function(strs) {
    var tmpHash = new Array(26);
    var resultHash = {};
    var out = [];
    for(var i = 0;i<strs.length;i++){
        for(var k = 0;k<26;k++){
            tmpHash[k] = '0';
        }
        var aCode = 'a'.charCodeAt();
        var tmpI = strs[i];
        var len = tmpI.length;
        var resultHashKey = '';
        for(var r = 0;r<len;r++){
            tmpHash[tmpI[r].charCodeAt() - aCode]++;
        }
        var tmpHashKey = tmpHash.join('');
        if(resultHash[tmpHashKey]==undefined){
            resultHash[tmpHashKey] = [];
        }
        resultHash[tmpHashKey].push(tmpI)
    }

    for(var key in resultHash){
        out.push(resultHash[key])
    }
    return out;
};

