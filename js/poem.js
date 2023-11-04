const upbeatPoem = [
    "Today, we stockpile empathy.",
    "We supply love and good energy.",
    "Every day is a fresh beginning.",
    "Listen my soul to the glad refrain.",
    "Take heart with the day and begin again.",
    "Follow your heart.",
    "Wide-eyed in wonder,",
    "I want to tell you",
    "About the sunflower I found",
    "Never forgetting my own beauty,",
    "Mix in the morning,",
    "Sugar cream, coffee bean,", 
    "On hot sunlight."
];

const melancholyPoem = [
    "With a different mind, Me, myself and I",
    "But I was blind",
    "Crashing upon rocks",
    "Grasses singing, leas bleeding",
    "I used to walk along your shore",
    "To be giddy and brittle",
    "To feel as though you are belittled",
    "The eyes of heaven peer down at me",
    "My soul does leap glory to glory",
    "I felt down",
    "Traumatized by jumping too high",
    "SAnd the fall keeps the flight with me,", 
    "I lay my head on the warmest breast"
];



const typePoem = () => {
    // Add HTML content with selector to be added to
    // Try all techniques, uncomment and observe with inspector
    let type = $("#id_type").val();
    let title = $("#id_poemTitle").val();
    let titleStr = (`${title}  (${type}) `)

    // .html(...) fills the container with the content
    $("#poem").html("<h2>" + titleStr + "</h2>");
  };


 const randomfillPoem = () => {

    let respone = $("#id_type").val();
    let responeStr = respone

    if (responeStr === "Upbeat"){
        let rnd = Math.floor(Math.random() * upbeatPoem.length);
        let newPoemLine = upbeatPoem[rnd];
        $("#id_freeform").val(newPoemLine);}

    else if (responeStr === "Melancholy"){
        let rndNum = Math.floor(Math.random() * melancholyPoem.length);
        let melanPoemLine = melancholyPoem[rndNum]
        $("#id_freeform").val(melanPoemLine);
   };
}

function createPoem() {
  
    let matchedSetPoem = $("#poem ul");
    let poemLine = parseInt($("#id_poemNumToCreate").val());
    //
    // Use jQuery to create a jQuery HTML object, a paragraph
    // get text from text area
    let poemContent = $("#id_freeform").val();

    // create the new element with the text area content
    let para = $(`<li>${poemContent}</li>`);
   
    let lastPara = matchedSetPoem.eq(poemLine - 1);

    // If the number is greater than the number of paragraphs,
    // add at end with appendTo,could use after last paragraph
    if (
        matchedSetPoem.length == 0 ||
        poemLine > matchedSetPoem.length
    )

        para.appendTo($("#poem"));
    else {

        // add the new paragraph in the position indicated by the number
        //
        lastPara.before(para);
    }
    }

    const addSmiley = (before) => {
        let poemNum = before
          ? $("#id_smileybefore").val()
          : $("#id_smileyafter").val();
        poemNum -= 1;
        let wantedPoemLine = $("#poem li:eq(" + poemNum + ")");
        console.log("XXX", wantedPoemLine.text());
        if (before) $("<span>&#128540;</span>").prependTo(wantedPoemLine);
        else $("<span>&#128540;</span>").appendTo(wantedPoemLine);
      }

    function signOff() {
    // set the text content of the signoff last paragraph
    let signoff = $("#id_signoffs").val();
    let authorName = $("#id_authorName").val();
    
    let lastLine = $(`<p> "${signoff}" <br><br> ${authorName}</p>`);
    // Filter that last paragraph and add the new signoff
    $("#poem li:last").after(lastLine);
    }