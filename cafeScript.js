$(document)
.ready(function(){
    menuPrice='', menu='', price='', qty='';
    total=0, salesSum=0, totalPrice=0;
})
.on('click','#btnAddMenu',function(){
    while(true){
        menu = prompt("메뉴명을 입력하시오. (취소:종료)");
        if (menu=="" || menu==null) break;
        price = prompt(menu+"의 가격을 입력하시오 (원)");
        let dpMenu = "<option>"+menu+" "+price+"원"+"</option>";
        $('#menu').append(dpMenu);
    };
})
.on('click','#menu',function(){
    menuPrice = $('#menu').val().split(" ");
    $('#selMenu').val(menuPrice[0]);
    $('#selPrice').val(parseInt(menuPrice[1]));
    $('#qty').val(1);
})
.on('change','#qty',function(){
    qty = $(this).val();
    price = parseInt(menuPrice[1]);
    total = qty*price;
    $('#selPrice').val(total);
})
.on('click','#cancle',function(){
    $('#selMenu, #qty, #selPrice').val('');
})
.on('click','#cart',function(){
    if ($('#selMenu').val()=='' || $('#qty').val()==NaN || $('#selPrice').val()==NaN) {
        alert('메뉴가 선택되지 않았습니다.')
        return false;
    } 
    let buying = '<option selected>'+$('#selMenu').val()+" "+$('#qty').val()+"개"+" "+$('#selPrice').val()+'원</option>';
    totalPrice += parseInt($('#selPrice').val());
    $('#order').append(buying);
    $('#sumPrice').val(totalPrice);
    $('#cancle').trigger('click');

})
.on('click','#orderOk',function(){
    if ($('#sumPrice').val()=='') {
        alert ("선택한 메뉴가 없습니다.")
        return false;
    }
    date = new Date();
    now = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes();
    list ='<option>'+now+" "+$('#mobile').val()+" "+$('#sumPrice').val()+'원</option>';
    salesSum += totalPrice;
    $('#sumSales').val(salesSum);
    $('#sales').append(list);
    $('#order').html('');
    $('#mobile, #sumPrice').val('');
    totalPrice=0;
})
.on('click','#delete',function(){
    $('#order').html('');
    $('#mobile, #sumPrice').val('');
    totalPrice=0;
})
.on('click','#search',function(){
    if ($('#mobile').val()=='') {
        alert('모바일 번호를 입력해주세요.');
        return false;
    }
    alert('확인 되었습니다.');
    return;
})
;






