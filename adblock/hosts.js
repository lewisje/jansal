http=new ActiveXObject("Microsoft.XMLHTTP");
fso=new ActiveXObject("Scripting.FileSystemObject");
http.open("GET", website="https://jansal.googlecode.com/svn/trunk/adblock/hosts", false);
http.setRequestHeader("Accept","text/html");
http.send();
f=fso.CreateTextFile(file="C:\\WINDOWS\\System32\\DRIVERS\\etc\\hosts",true);
f.Write(http.responseText);
f.Close();