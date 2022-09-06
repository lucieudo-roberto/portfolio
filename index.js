

function send_mail() {
   
	
    let user_name = document.getElementById('f-name').value +"%20"+ document.getElementById('l-name').value 
    let user_mail = document.getElementById('e-mail').value
    let user_text = document.getElementById('message').value
    
    let mail = {
    	from : `bcc=${user_mail}CC`,
    	_for : `mailto:lucieudo.roberto@gmail.com`,
    	_ass : `subject=${user_name.replaceAll(" ", "%20")}%20%20oportunidade%20de%20trabalho`,
    	_msg : `body=${user_text.replaceAll(" ","%20")}`
    }
    
    window.location.href = `${mail._for}?${mail.from}&${mail._ass}&${mail._msg}`
}
