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
 "http://malwaredomains.lanik.us/malwaredomains_full.txt",
 "http://malwarepatrol.com/cgi/submit?action=list_adblock",
 "http://rickrolldb.com/ricklist.txt");
i=0;
while(i<W.length){
 http.open("GET", website=W[i++], false);
 http.setRequestHeader("Accept","text/html");
 http.send();
 f.Write(http.responseText.replace(/[!#\$].*[\r\n]/g,"\n").replace(/\[A.*[\r\n]/g,"").replace(/\n\n/g,"\n").replace(/\|\|/g,"*"));
 f.Write("\n");
}
f.Close();