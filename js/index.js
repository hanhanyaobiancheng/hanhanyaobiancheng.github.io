function jsq(){
	var time=new Date();
	var year=time.getFullYear();
	var month=time.getMonth()+1;
	var day=time.getDate();
	var hours=time.getHours();
	var minutes=time.getMinutes();
    var seconds=time.getSeconds();
    var str='现在是：'
    str+=year+'年'+month+'月'+day+'日'+hours+'时'+minutes+'分'+seconds+'秒';
    var clock=document.getElementById('sj');
    clock.value=str;
    }
setInterval("jsq()",1000);

function djs(){
    var now=new Date();
    var newYear=new Date(now.getFullYear()+1,0,1,8,15,16);
    var days=parseInt((newYear-now)/86400000);
    var hour=(newYear-now)/86400000-parseInt((newYear-now)/86400000);
    var minute=hour*24-parseInt(hour*24);
    var second=minute*60-parseInt(minute*60);
    var str1="离欢欢生日"+"还有"+days+"天"+parseInt(hour*24)+"小时"+parseInt(minute*60)+"分钟"+parseInt(second*60)+"秒";
    var xndjs=document.getElementById('djs');
    xndjs.value=str1; 
    }
setInterval("djs()",1000);

