var a=1;    //注释可以跟在语句后面
/*
程序功能：打印九九乘法表
建立日期：2006年1月21日
*/
label1:for(var i=1;i<=9;i++){
    console.log("<br>");
    for(var j=1;j<=9;j++){
        if(j>i){
            continue label1;
        }
        console.log(i+"*"+j+"="+i*j+"&nbsp; ");
    }
}