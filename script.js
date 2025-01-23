
function count(){
    let Char = document.getElementById("CharecterCount");
    let text = document.getElementById("textInput").value;
    let wrd = document.getElementById("wordCounter");
    
    let charCount = text.length;                   /* ye text ka length hai */
    let wordCount = text.split(" ").length;       /* Ye line mei word count karne ke liye use kiya hai */
    Char.innerHTML = charCount;
    wrd.innerHTML = wordCount;
    

}

  