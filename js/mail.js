function sendMail(){
    let form = $('#gform').serialize();
    axios
      .post(`https://script.google.com/macros/s/AKfycbxnUddp2p0467_DwYu65HswMGS2oFC1qsBCPs5Uyg/exec`, form)
      .then(res => {
        if(res.data.result == 'success'){alert('메일전송이 성공하였습니다.')}
        console.log(res)
      })
  }
  
  
  $('#sendEmail').click(function(){
    if(validateForm()){
       sendMail();
    }
    
  });
  