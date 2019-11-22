


// This defines the types of characters available to the user
   
var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var numericChar = ["0","1","2","3","4","5","6","7","8","9"];

var specialChar = ["!","@","$","&","?","%"];





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
   
   

   

// This makes an array of the available characters based on user checkboxes
   
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
   
   
      
      
   
// This generates the password based on the user's choices
      
   function makePasswd(userArray) {

    var pswdLength = document.getElementById("pswdLength").value;

     var passwd = '';
     for (i=0; i < pswdLength; i++) {
     var c = Math.floor(Math.random()*userArray.length);
       passwd += userArray[c];
     }

        console.log(passwd)

        writeToPage(passwd)
   }
   




// This writes the password Label and password Data to the page

   function writeToPage(passwd) {

    var pswdLable = document.createElement('h1');
    pswdLable.textContent = "Your Password Is:";
    pswdLable.setAttribute("style", "text-align:center");
    document.body.appendChild(pswdLable);

    var pswdData = document.createElement('p');
    pswdData.textContent = passwd;
    pswdData.setAttribute("style", "text-align:center; font-size:100%;");
    document.body.appendChild(pswdData);
   }
   
   
   

   

   
   
   