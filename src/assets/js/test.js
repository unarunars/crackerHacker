import { callbackify } from "util";

export function test() {
    var abc = "ABC";
    var finalString = "";
    for (var i = 0; i < abc.length; i++)
        finalString += abc.charCodeAt(i);

    console.log(parseInt(finalString));

    //una að prufa virkar ekki
    
    function readTextFile(file, callback) {
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json")
        xhr.open('GET', file , true);
        console.log("haló");
        if(xhr.readyState === 4 && xhr.status === "200"){
            callbackify(xhr.responseText)
        }
        xhr.send(null);
        console.log(xhr.status);
        console.log(xhr.readyState);
    }
    readTextFile("src/assets/js/rainbow.txt", function(text){
        var data = JSON.parse(text);
        console.log("þetta á að vera data:");
        console.log(data);
    })
    
    
}
