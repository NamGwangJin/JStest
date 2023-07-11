let num, stopNum, other, interval, flag, limit;

$(document)
.ready(function(){
    num=1, interval=null, flag=true, limit = $('div').length;
})
.on('click','#btnStart',function(){
    $('#btnStart').css('display','none');
    interval = setInterval(function(){
        color(num);
        if (num==limit) flag = false;
        else if (num==1) flag = true;
        if (flag) num++;
        else num--;
    },100)
})
.on('click','#btnStop',function(){
    if (interval==null) {
        alert("작업이 실행되지 않았습니다.")
        return;
    }
    clearInterval(interval);
    $("#btnStart").css('display','block');
})
;
function color(num) {
    for (other=1 ; other<=limit ; other++){
        if (num==other) {
            $("#dv"+num).addClass('bgRed bdBlack');
        } else {
            $("#dv"+other).removeClass('bgRed bdBlack');
        }
    }
};