http = new ActiveXObject("Microsoft.XMLHTTP");
fso = new ActiveXObject("Scripting.FileSystemObject");
http.open("GET","http://www.malwaredomains.com/files/justdomains",false);
http.setRequestHeader("Accept","text/html");
http.send();
f=fso.CreateTextFile("BOOT.txt",true);
f.Write(http.responseText.replace(/^/,"0.0.0.0 ").replace(/[\r\n]/g,"\n0.0.0.0 ").replace(/0.0.0.0 $/g,""));
http.open("GET","http://amada.abuse.ch/blocklist.php?download=domainblocklist",false);
http.setRequestHeader("Accept","text/html");
http.send();
f.Write(http.responseText.replace(/[\r\n]#.*/g,"").replace(/[\r\n]/g,"\n0.0.0.0 ").replace(/^#.*[\r\n]/g,"").replace(/ #.*[\r\n]/g,"\n").replace(/0.0.0.0 $/g,""));
f.Close();