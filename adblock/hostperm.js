http=new ActiveXObject("Microsoft.XMLHTTP");
fso=new ActiveXObject("Scripting.FileSystemObject");
f=fso.CreateTextFile(file="hostperm.txt",true);
http.open("GET", website="http://pgl.yoyo.org/as/serverlist.php?hostformat=hostperm.1&showintro=0&mimetype=plaintext", false);
http.setRequestHeader("Accept","text/html");
http.send();
f.Write(http.responseText.replace(/\timage\t/g,"\tcookie\t"));
f.Write(http.responseText.replace(/\timage\t/g,"\tdocument\t"));
f.Write(http.responseText.replace(/\timage\t/g,"\tdtd\t"));
f.Write(http.responseText);
f.Write(http.responseText.replace(/\timage\t/g,"\tinstall\t"));
f.Write(http.responseText.replace(/\timage\t/g,"\tobject\t"));
f.Write(http.responseText.replace(/\timage\t/g,"\tobjectsub\t"));
f.Write(http.responseText.replace(/\timage\t/g,"\tother\t"));
f.Write(http.responseText.replace(/\timage\t/g,"\tping\t"));
f.Write(http.responseText.replace(/\timage\t/g,"\tpopup\t"));
f.Write(http.responseText.replace(/\timage\t/g,"\trefresh\t"));
f.Write(http.responseText.replace(/\timage\t/g,"\tscript\t"));
f.Write(http.responseText.replace(/\timage\t/g,"\tstylesheet\t"));
f.Write(http.responseText.replace(/\timage\t/g,"\tsubdocument\t"));
f.Write(http.responseText.replace(/\timage\t/g,"\txbl\t"));
f.Write(http.responseText.replace(/\timage\t/g,"\txmlhttp\t"));
http.open("GET", website="http://www.malwaredomains.com/files/BOOT", false);  
http.setRequestHeader("Accept","text/html");
http.send();
f.Write(http.responseText.replace(/\/\/.*[\r\n]/g,"").replace(/PRIMARY /g,"host\tcookie\t2\t").replace(/ blockeddomain\.hosts/g,""));
f.Write(http.responseText.replace(/\/\/.*[\r\n]/g,"").replace(/PRIMARY /g,"host\tdocument\t2\t").replace(/ blockeddomain\.hosts/g,""));
f.Write(http.responseText.replace(/\/\/.*[\r\n]/g,"").replace(/PRIMARY /g,"host\tdtd\t2\t").replace(/ blockeddomain\.hosts/g,""));
f.Write(http.responseText.replace(/\/\/.*[\r\n]/g,"").replace(/PRIMARY /g,"host\timage\t2\t").replace(/ blockeddomain\.hosts/g,""));
f.Write(http.responseText.replace(/\/\/.*[\r\n]/g,"").replace(/PRIMARY /g,"host\tinstall\t2\t").replace(/ blockeddomain\.hosts/g,""));
f.Write(http.responseText.replace(/\/\/.*[\r\n]/g,"").replace(/PRIMARY /g,"host\tobject\t2\t").replace(/ blockeddomain\.hosts/g,""));
f.Write(http.responseText.replace(/\/\/.*[\r\n]/g,"").replace(/PRIMARY /g,"host\tobjectsub\t2\t").replace(/ blockeddomain\.hosts/g,""));
f.Write(http.responseText.replace(/\/\/.*[\r\n]/g,"").replace(/PRIMARY /g,"host\tother\t2\t").replace(/ blockeddomain\.hosts/g,""));
f.Write(http.responseText.replace(/\/\/.*[\r\n]/g,"").replace(/PRIMARY /g,"host\tping\t2\t").replace(/ blockeddomain\.hosts/g,""));
f.Write(http.responseText.replace(/\/\/.*[\r\n]/g,"").replace(/PRIMARY /g,"host\tpopup\t2\t").replace(/ blockeddomain\.hosts/g,""));
f.Write(http.responseText.replace(/\/\/.*[\r\n]/g,"").replace(/PRIMARY /g,"host\trefresh\t2\t").replace(/ blockeddomain\.hosts/g,""));
f.Write(http.responseText.replace(/\/\/.*[\r\n]/g,"").replace(/PRIMARY /g,"host\tscript\t2\t").replace(/ blockeddomain\.hosts/g,""));
f.Write(http.responseText.replace(/\/\/.*[\r\n]/g,"").replace(/PRIMARY /g,"host\tstylesheet\t2\t").replace(/ blockeddomain\.hosts/g,""));
f.Write(http.responseText.replace(/\/\/.*[\r\n]/g,"").replace(/PRIMARY /g,"host\tsubdocument\t2\t").replace(/ blockeddomain\.hosts/g,""));
f.Write(http.responseText.replace(/\/\/.*[\r\n]/g,"").replace(/PRIMARY /g,"host\txbl\t2\t").replace(/ blockeddomain\.hosts/g,""));
f.Write(http.responseText.replace(/\/\/.*[\r\n]/g,"").replace(/PRIMARY /g,"host\txmlhttp\t2\t").replace(/ blockeddomain\.hosts/g,""));
http.open("GET", website="http://www.malwaredomainlist.com/hostslist/hosts.txt", false);
http.setRequestHeader("Accept","text/html");
http.send();
list=http.responseText.replace(/#.*[\r\n]/g,"").replace(/.*(localhost|rapidshare|mediafire).*/g,"").replace(/[\r\n]+/g,"\n");
f.Write(list.replace(/127.0.0.1 +/g,"host\tcookie\t2\t"));
f.Write(list.replace(/127.0.0.1 +/g,"host\tdocument\t2\t"));
f.Write(list.replace(/127.0.0.1 +/g,"host\tdtd\t2\t"));
f.Write(list.replace(/127.0.0.1 +/g,"host\timage\t2\t"));
f.Write(list.replace(/127.0.0.1 +/g,"host\tinstall\t2\t"));
f.Write(list.replace(/127.0.0.1 +/g,"host\tobject\t2\t"));
f.Write(list.replace(/127.0.0.1 +/g,"host\tobjectsub\t2\t"));
f.Write(list.replace(/127.0.0.1 +/g,"host\tother\t2\t"));
f.Write(list.replace(/127.0.0.1 +/g,"host\tping\t2\t"));
f.Write(list.replace(/127.0.0.1 +/g,"host\tpopup\t2\t"));
f.Write(list.replace(/127.0.0.1 +/g,"host\trefresh\t2\t"));
f.Write(list.replace(/127.0.0.1 +/g,"host\tscript\t2\t"));
f.Write(list.replace(/127.0.0.1 +/g,"host\tstylesheet\t2\t"));
f.Write(list.replace(/127.0.0.1 +/g,"host\tsubdocument\t2\t"));
f.Write(list.replace(/127.0.0.1 +/g,"host\txbl\t2\t"));
f.Write(list.replace(/127.0.0.1 +/g,"host\txmlhttp\t2\t"));
http.open("GET",website="https://zeustracker.abuse.ch/blocklist.php?download=hostfile",false);
http.setRequestHeader("Accept","text/html");
http.send();
f.Write(http.responseText.replace(/#.*[\r\n]/g,"").replace(/127.0.0.1\t/g,"host\tcookie\t2\t"));
f.Write(http.responseText.replace(/#.*[\r\n]/g,"").replace(/127.0.0.1\t/g,"host\tdocument\t2\t"));
f.Write(http.responseText.replace(/#.*[\r\n]/g,"").replace(/127.0.0.1\t/g,"host\tdtd\t2\t"));
f.Write(http.responseText.replace(/#.*[\r\n]/g,"").replace(/127.0.0.1\t/g,"host\timage\t2\t"));
f.Write(http.responseText.replace(/#.*[\r\n]/g,"").replace(/127.0.0.1\t/g,"host\tinstall\t2\t"));
f.Write(http.responseText.replace(/#.*[\r\n]/g,"").replace(/127.0.0.1\t/g,"host\tobject\t2\t"));
f.Write(http.responseText.replace(/#.*[\r\n]/g,"").replace(/127.0.0.1\t/g,"host\tobjectsub\t2\t"));
f.Write(http.responseText.replace(/#.*[\r\n]/g,"").replace(/127.0.0.1\t/g,"host\tother\t2\t"));
f.Write(http.responseText.replace(/#.*[\r\n]/g,"").replace(/127.0.0.1\t/g,"host\tping\t2\t"));
f.Write(http.responseText.replace(/#.*[\r\n]/g,"").replace(/127.0.0.1\t/g,"host\tpopup\t2\t"));
f.Write(http.responseText.replace(/#.*[\r\n]/g,"").replace(/127.0.0.1\t/g,"host\trefresh\t2\t"));
f.Write(http.responseText.replace(/#.*[\r\n]/g,"").replace(/127.0.0.1\t/g,"host\tscript\t2\t"));
f.Write(http.responseText.replace(/#.*[\r\n]/g,"").replace(/127.0.0.1\t/g,"host\tstylesheet\t2\t"));
f.Write(http.responseText.replace(/#.*[\r\n]/g,"").replace(/127.0.0.1\t/g,"host\tsubdocument\t2\t"));
f.Write(http.responseText.replace(/#.*[\r\n]/g,"").replace(/127.0.0.1\t/g,"host\txbl\t2\t"));
f.Write(http.responseText.replace(/#.*[\r\n]/g,"").replace(/127.0.0.1\t/g,"host\txmlhttp\t2\t"));
http.open("GET",website="http://amada.abuse.ch/blocklist.php?download=domainblocklist",false);
http.setRequestHeader("Accept","text/html");
http.send();
f.Write(http.responseText.replace(/[\r\n]#.*/g,"").replace(/[\r\n]/g,"\nhost\tcookie\t2\t").replace(/.*$/,"").replace(/^#.*[\r\n]/g,"").replace(/ #.*[\r\n]/g,"\n"));
f.Write(http.responseText.replace(/[\r\n]#.*/g,"").replace(/[\r\n]/g,"\nhost\tdocument\t2\t").replace(/.*$/,"").replace(/^#.*[\r\n]/g,"").replace(/ #.*[\r\n]/g,"\n"));
f.Write(http.responseText.replace(/[\r\n]#.*/g,"").replace(/[\r\n]/g,"\nhost\tdtd\t2\t").replace(/.*$/,"").replace(/^#.*[\r\n]/g,"").replace(/ #.*[\r\n]/g,"\n"));
f.Write(http.responseText.replace(/[\r\n]#.*/g,"").replace(/[\r\n]/g,"\nhost\timage\t2\t").replace(/.*$/,"").replace(/^#.*[\r\n]/g,"").replace(/ #.*[\r\n]/g,"\n"));
f.Write(http.responseText.replace(/[\r\n]#.*/g,"").replace(/[\r\n]/g,"\nhost\tinstall\t2\t").replace(/.*$/,"").replace(/^#.*[\r\n]/g,"").replace(/ #.*[\r\n]/g,"\n"));
f.Write(http.responseText.replace(/[\r\n]#.*/g,"").replace(/[\r\n]/g,"\nhost\tobject\t2\t").replace(/.*$/,"").replace(/^#.*[\r\n]/g,"").replace(/ #.*[\r\n]/g,"\n"));
f.Write(http.responseText.replace(/[\r\n]#.*/g,"").replace(/[\r\n]/g,"\nhost\tobjectsub\t2\t").replace(/.*$/,"").replace(/^#.*[\r\n]/g,"").replace(/ #.*[\r\n]/g,"\n"));
f.Write(http.responseText.replace(/[\r\n]#.*/g,"").replace(/[\r\n]/g,"\nhost\tother\t2\t").replace(/.*$/,"").replace(/^#.*[\r\n]/g,"").replace(/ #.*[\r\n]/g,"\n"));
f.Write(http.responseText.replace(/[\r\n]#.*/g,"").replace(/[\r\n]/g,"\nhost\tping\t2\t").replace(/.*$/,"").replace(/^#.*[\r\n]/g,"").replace(/ #.*[\r\n]/g,"\n"));
f.Write(http.responseText.replace(/[\r\n]#.*/g,"").replace(/[\r\n]/g,"\nhost\tpopup\t2\t").replace(/.*$/,"").replace(/^#.*[\r\n]/g,"").replace(/ #.*[\r\n]/g,"\n"));
f.Write(http.responseText.replace(/[\r\n]#.*/g,"").replace(/[\r\n]/g,"\nhost\trefresh\t2\t").replace(/.*$/,"").replace(/^#.*[\r\n]/g,"").replace(/ #.*[\r\n]/g,"\n"));
f.Write(http.responseText.replace(/[\r\n]#.*/g,"").replace(/[\r\n]/g,"\nhost\tscript\t2\t").replace(/.*$/,"").replace(/^#.*[\r\n]/g,"").replace(/ #.*[\r\n]/g,"\n"));
f.Write(http.responseText.replace(/[\r\n]#.*/g,"").replace(/[\r\n]/g,"\nhost\tstylesheet\t2\t").replace(/.*$/,"").replace(/^#.*[\r\n]/g,"").replace(/ #.*[\r\n]/g,"\n"));
f.Write(http.responseText.replace(/[\r\n]#.*/g,"").replace(/[\r\n]/g,"\nhost\tsubdocument\t2\t").replace(/.*$/,"").replace(/^#.*[\r\n]/g,"").replace(/ #.*[\r\n]/g,"\n"));
f.Write(http.responseText.replace(/[\r\n]#.*/g,"").replace(/[\r\n]/g,"\nhost\txbl\t2\t").replace(/.*$/,"").replace(/^#.*[\r\n]/g,"").replace(/ #.*[\r\n]/g,"\n"));
f.Write(http.responseText.replace(/[\r\n]#.*/g,"").replace(/[\r\n]/g,"\nhost\txmlhttp\t2\t").replace(/.*$/,"").replace(/^#.*[\r\n]/g,"").replace(/ #.*[\r\n]/g,"\n"));
f.Close();