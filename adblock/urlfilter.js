http=new ActiveXObject("Microsoft.XMLHTTP");
fso=new ActiveXObject("Scripting.FileSystemObject");
f=fso.CreateTextFile(file="urlfilterb.ini",true);
W=new Array("https://fanboy-adblock-list.googlecode.com/hg/opera/urlfilter.ini",
 "https://fanboy-adblock-list.googlecode.com/hg/opera/urlfilter-stats.ini",
 "https://fanboy-adblock-list.googlecode.com/hg/opera/urlfilter-esp.ini",
 "https://fanboy-adblock-list.googlecode.com/hg/opera/urlfilter-cz.ini",
 "https://fanboy-adblock-list.googlecode.com/hg/opera/urlfilter-pol.ini",
 "https://jansal.googlecode.com/svn/trunk/adblock/urlfilter-bg.ini",
 "https://fanboy-adblock-list.googlecode.com/hg/opera/urlfilter-swe.ini",
 "https://fanboy-adblock-list.googlecode.com/hg/opera/urlfilter-rus.ini",
 "https://fanboy-adblock-list.googlecode.com/hg/opera/urlfilter-tky.ini",
 "https://fanboy-adblock-list.googlecode.com/hg/opera/urlfilter-ind.ini",
 "https://fanboy-adblock-list.googlecode.com/hg/opera/urlfilter-vtn.ini",
 "https://fanboy-adblock-list.googlecode.com/hg/opera/urlfilter-chn.ini",
 "https://fanboy-adblock-list.googlecode.com/hg/opera/urlfilter-krn.ini",
 "https://fanboy-adblock-list.googlecode.com/hg/opera/urlfilter-jpn.ini",
 "http://pgl.yoyo.org/as/serverlist.php?hostformat=operafilter&showintro=0&mimetype=plaintext",
 "http://malwaredomains.lanik.us/malwaredomains_full.txt",
 "http://malwarepatrol.com/cgi/submit?action=list");
i=0;
while(i<W.length){
 http.open("GET", website=W[i++], false);
 http.setRequestHeader("Accept","text/html");
 http.send();
 f.Write(http.responseText.replace(/[!#\$].*/g,"").replace(/\[A.*[\r\n]/g,"").replace(/[\r\n]{2,}/g,"\n").replace(/^[\r\n]/,"").replace(/\|\|/g,"*://"));
}
http.open("GET",website="http://www.malwaredomainlist.com/hostslist/hosts.txt",false);
http.setRequestHeader("Accept","text/html");
http.send();
f.Write(http.responseText.replace(/.*(rapidshare|mediafire|localhost).*[\r\n]/g,"").replace(/#.*[\r\n]/g,"").replace(/[\r\n]+/g,"\n").replace(/127.0.0.1 +/g,"*").replace(/^[\r\n]+/,"").replace(/[\r\n]\*/g,"*\n*").replace(/[\r\n]$/,"*"));
http.open("GET",website="https://zeustracker.abuse.ch/blocklist.php?download=hostfile",false);
http.setRequestHeader("Accept","text/html");
http.send();
f.Write(http.responseText.replace(/#.*[\r\n]/g,"").replace(/127.0.0.1\t/g,"*").replace(/^[\r\n]+/,"").replace(/[\r\n]\*/g,"*\n*").replace(/[\r\n]$/,"*"));
http.open("GET",website="http://rickrolldb.com/ricklist.txt",false);
http.setRequestHeader("Accept","text/html");
http.send();
f.Write(http.responseText.replace(/[!#\$].*[\r\n]/g,"\n").replace(/\[A.*[\r\n]/g,"").replace(/[\r\n]{2,}/g,"\n").replace(/\|\|/g,"*://").replace(/[\r\n]/g,"\n*://").replace(/[\r\n]\*:\/\/[\r\n]/g,"\n").replace(/[\r\n]\*:\/\/youtube.*=/g,"\n").replace(/[\r\n]\*:\/\/$/g,""));
f.Close();