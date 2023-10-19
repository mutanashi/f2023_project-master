'use strict';

const http = require("http");
const fs = require("fs"); 
const qs = require('querystring');
const { error } = require("console");

const port = 3000;
const ip = "127.0.0.1";

const sendResponse = (filename, statusCode, response)=>{
    fs.readFile(`..${filename}`, (error, data)=>{
        if(error){
            response.statusCode = 500;
            response.setHeader("Content-Type", "text/plain");
            response.end("Sorry, internal error");
        }
        else{
            response.statusCode = statusCode;
            response.setHeader("Content-Type", "text/html");
            response.end(data);
        }
    });

};



const server = http.createServer((request, response)=>{
    console.log(`request:${request}`);
    console.log(`request.url:${request.url}`);
    console.log(`request.method:${request.method}`);
    
    const method = request.method;
    const url = request.url;

    if(request.method === "GET"){
        //const requestUrl = new URL(url, `http://${ip}:${port}`);
        
        //const lang = requestUrl.searchParams.get("lang");
        //console.log(requestUrl);
     
    }else{
        let buffer = [];
        request.on('data', chunk => {
          buffer.push(chunk);
          console.log("bug1");
        });
        request.on("end", () => {
            buffer = Buffer.concat(buffer).toString();
            buffer = qs.parse(buffer);
            console.log(buffer);
            console.log("bug2");
            var temp = `${getCookie(request, "userid")}`;
            console.log(typeof(temp));
          
            response.end(`My user id cookie:${temp}`);
        });
    }
    
    
  
});

























function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(request, name) {
    var cookie_data = parseCookies(request);
    var nameEQ = name + "=";
    console.log("bug3");
    console.log(cookie_data);
    console.log(typeof(cookie_data));
    console.log(cookie_data.userid);
    /*for(var i=0;i < cookie_data.length;i++) {
        console.log("bug4");
        var c = cookie_data[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        console.log("bug5");
        console.log(c);
    }*/
    return `${cookie_data[name]}`;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function parseCookies (request) {
    const list = {};
    const cookieHeader = request.headers?.cookie;
    if (!cookieHeader) return list;

    cookieHeader.split(`;`).forEach(function(cookie) {
        let [ name, ...rest] = cookie.split(`=`);
        name = name?.trim();
        if (!name) return;
        const value = rest.join(`=`).trim();
        if (!value) return;
        list[name] = decodeURIComponent(value);
    });

    return list;
}



server.listen(port, ip, ()=>{
    console.log(`server is running at http://${ip}:${port}` );

});