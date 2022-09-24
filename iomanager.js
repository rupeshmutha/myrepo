const fs=require('fs'); //module-librabry/readymade function

var counter=1;

function write(){
    counter++;
    var message="welcome"+ counter;
    fs.writeFile("hello.txt",message,()=>{
        console.log('content is written in file')
    });
}

function read(){
    fs.readFile("hello.txt",
                (err,data)=>{
                var str=data.toString();
                console.log(str);    
    });
}


setInterval(write,5000);
setInterval(read,10000);
