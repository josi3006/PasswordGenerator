

// This validates that checkboxes are checked

function valChecked(){
    var chkd = userInputForm.lowerChar.checked || 
               userInputForm.upperChar.checked ||
               userInputForm.numericChar.checked || 
               userInputForm.specialChar.checked
   
    if (chkd == true) {
        makeArray();
    } 
   
    else {
       alert ("Please check at least one character type.")
    }
   }
   
   
   
   // This makes an array of all available characters based on user checkboxes
   
   function makeArray() {
   
   var userArray = []
     
         if(document.getElementById("lowerChar").checked) {
           var userArray = lowerChar.concat(userArray);
     }
         if(document.getElementById("upperChar").checked) {
           var userArray = upperChar.concat(userArray);
     }
         if(document.getElementById("numericChar").checked) {
           var userArray = numericChar.concat(userArray);
     }
         if(document.getElementById("specialChar").checked) {
           var userArray = specialChar.concat(userArray);
     }
   
     console.log(userArray);
   
       makePasswd(userArray)
   
   }
   
   
   
   
   
   
   
   // This generates the password
      
   function makePasswd(userArray) {
     var passwd = '';
     var chars = userArray;
     for (i=1; i < userArray.length; i++) {
       var c = Math.floor(Math.random()*chars.length + 1);
       passwd += chars[c]
     }
    writeToPage(passwd)
   }
   
   function writeToPage(passwd) {

        console.log(passwd)
       // Use DOM here to create password display element (after breaking javascript into own file)
   }
   
   
   
   
   // This defines the types of characters available
   
   var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   
   var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   
   var numericChar = ["0","1","2","3","4","5","6","7","8","9"];
   
   var specialChar = ["!","@","$","&","?","%"];
   
   
   