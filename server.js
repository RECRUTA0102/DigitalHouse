const http = require("http");

http.createServer((req, res)=>{
    res.writeHead(200, {"content-type": "text/plain"});
     switch(req.url){
         case"/":
         res.end("não tem nada aqui");
         break
         case"/procurar":
         res.end("cadê a teté?");
         break
         default:
         res.end("tu se perdeu");
         break
     }

}).listen(3060, "localhost");

