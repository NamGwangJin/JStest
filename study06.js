$(document)
.ready(function(){
    $('#showDialog').dialog({
        title: "회원가입",
        autoOpen:false,
        modal:false,
        width:500,
        buttons: [
            {
                text: "OK",
                id: "btnOK",
                click: function(){
                    $('#btnOK').hide();
                    $('#btnClose').hide();
                    if($('#userid').val()=='') {
                        showAlert('사용자 아이디를 입력하시오');
                        return false;
                    }
                    if($('#passcode').val()=='' || $('#passcode1').val()==''){
                        showAlert('비밀번호와 비밀번호확인을 입력하시오');
                        return false;
                    } else if($('#passcode').val()!=$('#passcode1').val()){
                        showAlert('비밀번호와 비밀번호 확인은 같아야 합니다'); return false;
                    }
                    if($('#name').val()==''){
                        showAlert('실명을 입력하시오'); return false;
                    }
                    let gender='';
                    $('input[name=gender]:checked').each(function(){
                        gender=$(this).attr('id');
                    })
                    if(gender==''){
                        showAlert('성별을 선택하시오'); return false;
                    }
                    if($('#birthday').val()==''){
                        showAlert('생년월일을 입력하시오'); return false;
                    }
                    if($('#mobile').val()==''){
                        showAlert('모바일번호를 입력하시오'); return false;
                    }
                    if($('#selRegion').val()=='' || $('#selRegion').val()==null){
                        showAlert('거주지역을 선택하시오'); return false;
                    }
                    let str='';
                    $('input[name=game]:checked').each(function(){
                        if(str!='') str+=',';
                        str+=$(this).val();
                    });
                    if(str==''){
                        showAlert('게임을 선택하시오'); return false;
                    }
                    let pstr='사용자아이디:'+$('#userid').val()+'<br>'+
                    '비밀번호:'+$('#passcode').val()+'<br>'+
                    '실명:'+$('#name').val()+'<br>'+
                    '성별:'+gender+'<br>생년월일:'+$('#birthday').val()+'<br>'+
                    '모바일:'+$('#mobile').val()+'<br>'+
                    '거주지역:'+$('#selRegion').val()+'<br>'+
                    '게임:'+str;
                    $('#dvCheck').html(pstr);
                    $('#userid, #passcode, #passcode1, #name, #birthday, #mobile, #selRegion').val('');
                    $("input[name='gender'], input[name='game']").attr("checked", false);
                    $(this).dialog('close');
                }
            },
            {
                text: "Close",
                id: 'btnClose',
                click: function(){
                    $('#userid, #passcode, #passcode1 #name, #birthday, #mobile, #selRegion').val('');
                    $("input[name='gender'], input[name='game']").attr("checked", false);
                    $(this).dialog('close');
                }
            }
        ]
    })
})
.on('click','#btn',function(){
    $('#showDialog').dialog('open');
    $('#btnOK').show();
    $('#btnClose').show();
})
function showAlert(str){
    $('#lblAlert').text(str);
    $('#lblAlert').fadeIn();
    setTimeout(function(){
        $('#lblAlert').fadeOut();
        $('#showDialog').dialog('close');
    },2000);
}