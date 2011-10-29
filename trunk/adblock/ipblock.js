http=new ActiveXObject("Microsoft.XMLHTTP");
fso=new ActiveXObject("Scripting.FileSystemObject");
v=new ActiveXObject("Shell.Application");
f=fso.CreateTextFile(file="ip.txt",true);
function imp(ip){
 http.open("GET",website=ip,false);
 http.setRequestHeader("Accept","text/html");
 http.send();
 f.Write(http.responseText.replace(/#.*|38\.114\.196\.226|195\.122\.131\..*/g,"").replace(/[\r\n]+/g,"\n").replace(/[\r\n]*$/,"\n"));
}
imp("https://spyeyetracker.abuse.ch/blocklist.php?download=ipblocklist");
imp("https://zeustracker.abuse.ch/blocklist.php?download=ipblocklist");
imp("http://tools.sucuri.net/blacklist/MS-iplist.txt");
imp("http://www.malwaredomainlist.com/hostslist/ip.txt");
f.Close();
f=fso.OpenTextFile(file="ip.txt",1);
while(!f.AtEndOfStream){
 if((r=f.readLine())=="")continue;
 v.ShellExecute("ipblock.cmd","Block "+r,".","open",0);
 //v.ShellExecute("netsh","advfirewall firewall delete rule name=\"Block "+r+"\"",".","open",0);
}
f.Close();