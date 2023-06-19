const { write } = require("fs");
let http = require("http")

let server =http.createServer(function(req,res){
    let {url, method } = req;
let user = ["ali","usman", "khan"]
    if (url==="/" && method==="GET"){
        console.log("server is running now");
        res.setHeader("content-type", "text/html");
        res.statusCode = 200;
        res.write("<h1>this is server side page</h1>");
       return res.end()
    }else if (url === "/users" && method === "GET"){
       res.write("<html><head></head><body><ul>")
        for (let i = 0;i<=user.length; i++){
            res.write(`<li> ${user[i]}</li>`)
        }
        res.end("</ul></body></html>")
    }else 
{
    res.write("this is not base url side ")
    res.end()
}
})



server.listen(4000)