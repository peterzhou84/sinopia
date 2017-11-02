// twitter bootstrap stuff;
// not in static 'cause I want it to be bundled with the rest of javascripts
require('./bootstrap-modal')

// our own files
require('./search')
require('./entry')

var $ = require('unopinionate').selector
$(document).on('click', '.js-userLogoutBtn', function() {
  $('#userLogoutForm').submit()
  return false
})

$(document).on('click', '.js-btn-changepwd-submit', function() {
  // 通过ajax提交数据
  var params = $("form[id=changepwd-form]").serialize();  
  var action = $("form[id=changepwd-form]").attr('action');
    $.ajax( {  
      type : "POST",  
      url : action,  
      data : params,  
      success : function(rst) {  
        if(rst && rst.status == 0){
          alert('Password changed successfully.');
        }else{
          alert('Password change failed.' + rst.msg?rst.msg:'');
        }
      },
      error : function(rst){
        alert("failed: " + rst.statusText?rst.statusText:'');  
      }
  });  

  return false
})

