var ent = prompt ("Yo what's up?", "<type something>");

var question = ent.slice(-1) == "?";
var fortnite = ent.includes('fortnite');
var empty = ent == "";
var upperCase = ent === ent.toUpperCase();

if(ent = question){
    console.log("Ouais Ouais....");
} else if(ent = fortnite){
    console.log("On s'fait une partie en soum-soum ?");
} else if(ent = empty){
    console.log("T'es en PLS ?");
} else if(ent = upperCase){
    console.log("Oulaaa calme toi wesh");
} else {
    console.log("Balek.");
}
