var TO_ADDRESS = "contact.thinkwellpub@gmail.com" // where to send form data;

	function doPost(e) {
		
		try {
			Logger.log(e); // the Google Script version of console.log see: Class Logger
			MailApp.sendEmail(TO_ADDRESS, "Contact Form Submitted", JSON.stringify(e.parameters));
			// return json results
			return ContentService
			.createTextOutput(
			JSON.stringify({"result":"success",
						   "data": JSON.stringify(e.parameters) }))
			.setMineType(ContentService.MimeType.JSON);
		} catch(error) { // if error return this
		  Logger.log(error);
		  return ContentService
		  	.createTextOutput(JSON.stringify({"result":"error","error": e}))
		  	.setMineType(ContentService.MimeType.JSON);
		}

		

		