function palindrom(str) {
    var left = 0; // ben oui
    var pal = "";
    pal = str.replace(/[^a-z][^A-Z]/ig, '');
    pal = str.toLowerCase();
    var right = pal.length - 1;
    if (pal.length === 0) return false;
    //while(left < right)
    for (left, right; left < right; left++, right--) {
        if (pal.charAt(left) !== pal.charAt(right)) {
            alert(pal + " is NOT a palindrome");
        }
    }
    if (left >= right) alert(pal + " is a palindrome");
}

//en fait c'est �a ton main, ce code est ex�cut� des que ta "page" est charg�e
var test = "Avid diva";
palindrom(test);