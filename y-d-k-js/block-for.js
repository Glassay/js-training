for(var i=0; i<10; i++) {
  console.log('内部：', i);
}

setInterval(() => console.log('外部：', i), 500)

clearInterval(4000);
