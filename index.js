

function send_mail() {
   
	
    let user_name = document.getElementById('f-name').value +"%20"+ document.getElementById('l-name').value 
    let user_asst = document.getElementById('e-mail').value
    let user_text = document.getElementById('message').value
    
    let mail = {
    	//from : `bcc=${user_mail}CC`,
    	_for : `mailto:lucieudo.roberto@gmail.com`,
    	_ass : `subject=olá%20sou%20o%20${user_name.replaceAll(" ", "%20")}%20${user_asst.replaceAll(" ","%20")}`,
    	_msg : `body=${user_text.replaceAll(" ","%20")}`
    }
    
    //console.table(mail)
    window.location.href = `${mail._for}?${mail._ass}&${mail._msg}`
}
