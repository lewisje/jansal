http=new ActiveXObject("Microsoft.XMLHTTP");
fso=new ActiveXObject("Scripting.FileSystemObject");
W=new Array("https://secure.fanboy.co.nz/fanboy-dimensions.txt",
 "https://fanboy-adblock-list.googlecode.com/hg/adblock-gannett.txt",
 "https://fanboy-adblock-list.googlecode.com/hg/fanboy-adblocklist-addon.txt",
 "https://fanboy-adblock-list.googlecode.com/hg/fanboy-adblocklist-current-p2p.txt",
 "https://fanboy-adblock-list.googlecode.com/hg/firefox-regional/fanboy-adblocklist-chn.txt",
 "https://fanboy-adblock-list.googlecode.com/hg/firefox-regional/fanboy-adblocklist-ind.txt",
 "https://fanboy-adblock-list.googlecode.com/hg/firefox-regional/fanboy-adblocklist-ita.txt",
 "https://fanboy-adblock-list.googlecode.com/hg/firefox-regional/fanboy-adblocklist-krn.txt",
 "https://fanboy-adblock-list.googlecode.com/hg/firefox-regional/fanboy-adblocklist-pol.txt",
 "https://fanboy-adblock-list.googlecode.com/hg/firefox-regional/fanboy-adblocklist-swe.txt",
 "https://fanboy-adblock-list.googlecode.com/hg/firefox-regional/fanboy-adblocklist-tky.txt",
 "https://fanboy-adblock-list.googlecode.com/hg/firefox-regional/fanboy-adblocklist-vtn.txt",
 "https://adversity.googlecode.com/hg/Antisocial.txt",
 "https://adversity.googlecode.com/hg/Adversity.txt",
 "https://adversity.googlecode.com/hg/Adversity-Adult.txt",
 "https://adversity.googlecode.com/hg/Adversity-p2p.txt",
 "https://adversity.googlecode.com/hg/Adversity-Tracking.txt",
 "http://adblockrules.org/download.php?type=all&title=adblockrules.org",
 "http://gitorious.org/adblock-latvian/adblock-latvian/blobs/raw/master/latvian-list.txt",
 "http://malwaredomains.lanik.us/malwaredomains_full.txt",
 "http://malwarepatrol.com/cgi/submit?action=list_adblock",
 "http://rickrolldb.com/ricklist.txt",
 "http://pgl.yoyo.org/as/serverlist.php?hostformat=adblock&showintro=0&startdate[day]=&startdate[month]=&startdate[year]=&mimetype=plaintext");
i=0;
while(i<W.length){
 f=fso.CreateTextFile(file="subscriptions\\"+W[i].match(/[-a-zA-Z0-9_\.]*$/),true);
 http.open("GET", website=W[i++], false);
 http.setRequestHeader("Accept","text/html");
 http.send();
 f.Write(http.responseText);
 f.Close();
}
f=fso.GetFile("subscriptions\\adblockrules.org");
f.name="adblockrules.txt";
f=fso.GetFile("subscriptions\\list_adblock");
f.name="malpatrol.txt";
f=fso.GetFile("subscriptions\\plaintext");
f.name="pgl.txt";