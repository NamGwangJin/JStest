$(document)
.ready(function(){
    nId='', nPw='', nName='', nGen='', nMobile='', nRegion='', nGame='', ndx=0;
})
.on('click','#pwCheck',function(){

    if($('#passcode').val()=='' || $('#passcode1').val()=='') {
        addAlert('비밀번호 또는 비밀번호 확인이 입력되지 않았습니다.');
        return false;
    } else if ($('#passcode').val()!=$('#passcode1').val()){
        addAlert('비밀번호가 일치하지 않습니다.');
        return false;
    } else {
        addAlert('비밀번호가 일치합니다.');
        nPw = $('#passcode').val()+'<br>';
    }

})
.on('click','#btnCheck',function(){

    if($('#userid').val()=='') {
        addAlert('아이디를 입력해주세요.');
        return false;
    } else {
        nId = 'ID : '+$('#userid').val()+'<br>';
    }

    if($('#passcode').val()=='' || $('#passcode1').val()=='') {
        addAlert('비밀번호 또는 비밀번호 확인이 입력되지 않았습니다.');
        return false;
    } else if ($('#passcode').val()!=$('#passcode1').val()){
        addAlert('비밀번호가 일치하지 않습니다.');
        return false;
    } else {
        nPw = '비밀번호 : '+$('#passcode').val()+'<br>';
    }

    if($('#name').val()==''){
        addAlert('실명을 입력해주세요.');
        return false;
    } else {
        nName = '실명 : '+$('#name').val()+'<br>';
    }

    // $('[name=gender]:checked').each(function(){
    //     nGen = '성별 : '+$(this).val()+'<br>';
    // })

    // if(nGen=='') {
    //     alert("성별이 선택되지 않았습니다.");
    //     return false;
    // }

    $('[name=gender]:checked').each(function(){
        nGen = '성별 : '+$(this).attr('id')+'<br>';
        console.log(nGen);
    })
    if(nGen=='') {
        addAlert('성별을 선택해주세요.');
        return false;
    }

    if($('#birthday').val()=='') {
        addAlert('생년월일을 선택해주세요.');
        return false;
    } else {
        nDay = '생년월일 : '+$('#birthday').val()+'<br>';
    }

    if($('#mobile').val()==''){
        addAlert('모바일 번호를 입력해주세요.');
        return false;
    } else {
        nMobile = '모바일 번호 : '+$('#mobile').val()+'<br>';
    }

    $('#selRegion option:selected').each(function(){
        nRegion='거주지역 : '+$(this).val()+'<br>';
    })

    if (nRegion=='') {
        addAlert('거주지역을 선택해주세요.');
        return false;
    }

    str='';
    $('[name=game]:checked').each(function(){
        str+=$(this).val()+'<br>';
    })
    nGame='-선택된 게임-<br>'+str;


    if (nGame=='-선택된 게임-<br>') {
        addAlert('게임을 1가지 이상 선택해주세요.');
        return false;
    } else {
        $('#dvCheck').html('입력된 정보<br>'+nId+nPw+nName+nGen+nMobile+nRegion+nGame)
    }   
})
;

function addAlert(str) {
    $('#lblAlert').text(str)
    $('#lblAlert').fadeToggle();
    setTimeout(function(){
        $('#lblAlert').fadeToggle();
    },2000)
}