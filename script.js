var index = 0;
var jan = 0;

function changecolors(){
    var colors = ["yellow","blue","orange","green","purple"];

    document.getElementsByTagName("body")[0].
    style.background = colors[index++];

    if(index > colors.length-1)
         index = 0;
}
