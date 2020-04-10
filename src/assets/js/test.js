
export function test() {
    var abc = "ABC";
    var finalString = "";
    for (var i = 0; i < abc.length; i++)
        finalString += abc.charCodeAt(i);

    console.log(parseInt(finalString));
}
