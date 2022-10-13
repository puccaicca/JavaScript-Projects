

// Form validation code will come here.
      function validate() {
      
         if( document.myForm.fname.value == "" ) {
            alert( "Please provide your first name!" );
            document.myForm.Name.focus() ;
            return false;
         }
         if( document.myForm.lname.value == "" ) {
            alert( "Please provide your last name!" );
            return false;
         }
         if( document.myForm.mail.value == "" ) {
            alert( "Please provide your Email!" );
            document.myForm.mail.focus() ;
            return false;
         }
    }

  