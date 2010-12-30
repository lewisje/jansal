http=new ActiveXObject("Microsoft.XMLHTTP");
fso=new ActiveXObject("Scripting.FileSystemObject");
f=fso.CreateTextFile(file="cookprm.txt",true);
W=new Array("http://malwarepatrol.com/cgi/submit?action=list_mcf",
 "http://pgl.yoyo.org/as/serverlist.php?hostformat=cookperm&showintro=0&mimetype=plaintext");
i=0;
while(i<W.length){
 http.open("GET", website=W[i++], false);
 http.setRequestHeader("Accept","text/html");
 http.send();
 f.Write(http.responseText.replace(/\#.*[\r\n]/g,"").replace(/^[\r\n]/g,"").replace(/[\r\n]$/g,"").replace(/\t/g," "));
}
f.Close();