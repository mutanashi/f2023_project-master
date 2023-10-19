
const http = require("http");
const fs = require("fs"); 
const { error } = require("console");

const port = 5500;
const ip = "127.0.0.1";


const sendResponse = (filename, statusCode, response)=>{
    fs.readFile(`./html_folder/${filename}`, (error, data)=>{
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
    /*console.log(`request:${request}`);
    console.log(`request.url:${request.url}`);
    console.log(`request.method:${request.method}`);*/
    
    const method = request.method;
    const url = request.url;

    if(request.method === "GET"){
        const requestUrl = new URL(url, `http://${ip}:${port}`);
        
        const lang = requestUrl.searchParams.get("lang");
        console.log(requestUrl);
        if(requestUrl.pathname === "/index.html"){
            console.log("bug1");
            sendResponse("index.html", 200, response);
        }else if(requestUrl.pathname === "/about.html"){
            console.log("bug2");
            sendResponse("about.html", 200, response);
        }else{
            console.log("bug3");
            sendResponse("404.html", 404, response);
        }
    }else{
        response.end("qqq");
    }
    
    
  
});



server.listen(port, ip, ()=>{
    console.log(`server is running at http://${ip}:${port}` );

});