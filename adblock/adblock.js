http = new ActiveXObject("Microsoft.XMLHTTP");
fso = new ActiveXObject("Scripting.FileSystemObject");
http.open("GET", "https://jansal.googlecode.com/svn/trunk/adblock/urlfilter.ini", false);  
http.setRequestHeader("Accept","text/html");
http.send();
f=fso.CreateTextFile("adblock.ini", true); 
f.Write((http.responseText.replace(/\*/g,"")).replace(/#/g,"# "));
f.Close();