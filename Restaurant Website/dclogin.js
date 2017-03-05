function clicked() {
	var user = document.getElementById("emf");
	var pass = document.getElementById("pwf");
	
	var coruser = "test";
	var corpass = "test123";
	
	if(user.value == coruser) {
		if(pass.value == corpass) {
			open("https://www.dinersclubus.com");
		}else{
			alert("Incorrect email or password");
		}
	}
}