http = new ActiveXObject("Microsoft.XMLHTTP");
fso = new ActiveXObject("Scripting.FileSystemObject");
http.open("GET", "http://www.malwaredomains.com/files/BOOT", false);  
http.setRequestHeader("Accept","text/html");
http.send();
f=fso.CreateTextFile("BOOT.txt", true); 
f.Write(http.responseText.replace(/\/\/.*[\n\r]/g,"").replace(/PRIMARY/g,"0.0.0.0").replace(/ blockeddomain\.hosts/g,""));
f.Close();