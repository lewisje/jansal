http=new ActiveXObject("Microsoft.XMLHTTP");
fso=new ActiveXObject("Scripting.FileSystemObject");
http.open("GET", website="https://jansal.googlecode.com/svn/trunk/adblock/hosts", false);
http.setRequestHeader("Accept","text/html");
http.send();
f=fso.CreateTextFile(file="C:\\WINDOWS\\System32\\DRIVERS\\etc\\hosts",true);
f.Write(http.responseText);
f.Close();
http.open("GET", website="http://pgl.yoyo.org/as/serverlist.php?hostformat=proxyautoconfig&useip=0.0.0.0&mimetype=plaintext", false);
http.setRequestHeader("Accept","text/html");
http.send();
f=fso.CreateTextFile(file="C:\\WINDOWS\\System32\\DRIVERS\\etc\\proxy",true);
f.Write(http.responseText);
f.Close();
v=new ActiveXObject("Shell.Application");
v.ShellExecute("ipconfig", "/displaydns", "C:\\mf\\", "open", 0);