http=new ActiveXObject("Microsoft.XMLHTTP");
fso=new ActiveXObject("Scripting.FileSystemObject");
W=new Array("https://gitorious.org/adblock-latvian/adblock-latvian/blobs/raw/master/lists/latvian-list.txt",
 "https://secure.fanboy.co.nz/fanboy-dimensions.txt",
 "https://secure.fanboy.co.nz/fanboy-adult.txt",
 "https://secure.fanboy.co.nz/fanboy-addon.txt",
 "https://secure.fanboy.co.nz/fanboy-p2p.txt",
 "https://secure.fanboy.co.nz/adblock-gannett.txt",
 "https://secure.fanboy.co.nz/fanboy-tracking-complete.txt",
 "https://secure.fanboy.co.nz/enhancedstats.txt",
// "https://fanboy-adblock-list.googlecode.com/hg/adblock-gannett.txt",
// "https://fanboy-adblock-list.googlecode.com/hg/fanboy-adblocklist-addon.txt",
// "https://fanboy-adblock-list.googlecode.com/hg/fanboy-adblocklist-current-p2p.txt",
// "https://fanboy-adblock-list.googlecode.com/hg/fanboy-adblocklist-stats-intl.txt",
// "https://fanboy-adblock-list.googlecode.com/hg/other/enhancedstats-addon.txt",
// "https://fanboy-adblock-list.googlecode.com/hg/firefox-regional/fanboy-adblocklist-chn.txt",
// "https://fanboy-adblock-list.googlecode.com/hg/firefox-regional/fanboy-adblocklist-ind.txt",
// "https://fanboy-adblock-list.googlecode.com/hg/firefox-regional/fanboy-adblocklist-ita.txt",
// "https://fanboy-adblock-list.googlecode.com/hg/firefox-regional/fanboy-adblocklist-krn.txt",
// "https://fanboy-adblock-list.googlecode.com/hg/firefox-regional/fanboy-adblocklist-pol.txt",
// "https://fanboy-adblock-list.googlecode.com/hg/firefox-regional/fanboy-adblocklist-swe.txt",
// "https://fanboy-adblock-list.googlecode.com/hg/firefox-regional/fanboy-adblocklist-tky.txt",
// "https://fanboy-adblock-list.googlecode.com/hg/firefox-regional/fanboy-adblocklist-vtn.txt",
 "https://secure.fanboy.co.nz/fanboy-chinese.txt",
 "https://secure.fanboy.co.nz/fanboy-indian.txt",
 "https://secure.fanboy.co.nz/fanboy-italian.txt",
 "https://secure.fanboy.co.nz/fanboy-korean.txt",
 "https://secure.fanboy.co.nz/fanboy-polish.txt",
 "https://secure.fanboy.co.nz/fanboy-swedish.txt",
 "https://secure.fanboy.co.nz/fanboy-turkish.txt",
 "https://secure.fanboy.co.nz/fanboy-vietnam.txt",
 "http://ideone.com/plain/K452p",
 "https://adversity.googlecode.com/hg/Antisocial.txt",
 "https://adversity.googlecode.com/hg/Adversity.txt",
 "https://adversity.googlecode.com/hg/Adversity-Adult.txt",
 "https://adversity.googlecode.com/hg/Adversity-p2p.txt",
 "https://adversity.googlecode.com/hg/Adversity-Tracking.txt",
// "http://dev.mathiasbaert.be/misc/facebook-connect-optout-adblockplusfilter.txt",
 "http://adblockrules.org/download.php?type=all&title=adblockrules.org",
 "http://malwaredomains.lanik.us/malwaredomains_full.txt",
 "http://malwarepatrol.com/cgi/submit?action=list_adblock",
 "http://rickrolldb.com/ricklist.txt",
 "http://www.jabcreations.com/downloads/adblock-filters.php",
 "https://monzta.maltekraus.de/adblock_social.txt");
i=0;
while(i<W.length){
 f=fso.CreateTextFile(file="subscriptions\\"+W[i].match(/[-a-zA-Z0-9_\.]*$/),true);
 http.open("GET", website=W[i++], false);
 http.setRequestHeader("Accept","text/html");
 http.send();
 f.Write(http.responseText);
 f.Close();
}
f=fso.GetFile("subscriptions\\fanboy-chinese.txt");
f.name="fanboy-adblocklist-chn.txt";
f=fso.GetFile("subscriptions\\fanboy-indian.txt");
f.name="fanboy-adblocklist-ind.txt";
f=fso.GetFile("subscriptions\\fanboy-italian.txt");
f.name="fanboy-adblocklist-ita.txt";
f=fso.GetFile("subscriptions\\fanboy-korean.txt");
f.name="fanboy-adblocklist-krn.txt";
f=fso.GetFile("subscriptions\\fanboy-polish.txt");
f.name="fanboy-adblocklist-pol.txt";
f=fso.GetFile("subscriptions\\fanboy-swedish.txt");
f.name="fanboy-adblocklist-swe.txt";
f=fso.GetFile("subscriptions\\fanboy-turkish.txt");
f.name="fanboy-adblocklist-tky.txt";
f=fso.GetFile("subscriptions\\fanboy-vietnam.txt");
f.name="fanboy-adblocklist-vtn.txt";
f=fso.GetFile("subscriptions\\fanboy-addon.txt");
f.name="fanboy-adblocklist-addon.txt";
f=fso.GetFile("subscriptions\\fanboy-p2p.txt");
f.name="fanboy-adblocklist-current-p2p.txt";
f=fso.GetFile("subscriptions\\enhancedstats.txt");
f.name="enhancedstats-addon.txt";
f=fso.GetFile("subscriptions\\fanboy-tracking-complete.txt");
f.name="fanboy-adblocklist-stats-intl.txt";
f=fso.GetFile("subscriptions\\adblock-filters.php");
f.name="adblock-filters.txt";
f=fso.GetFile("subscriptions\\adblockrules.org");
f.name="adblockrules.txt";
f=fso.GetFile("subscriptions\\list_adblock");
f.name="malpatrol.txt";
f=fso.GetFile("subscriptions\\K452p");
f.name="adblock-persian.txt";
W="http://tools.sucuri.net/blacklist/MH-sitelist.txt";
f=fso.CreateTextFile(file="subscriptions\\"+W.match(/[-a-zA-Z0-9_\.]*$/),true);
http.open("GET",website=W,false);
http.setRequestHeader("Accept","text/html");
http.send();
f.Write("[Adblock]\n"+http.responseText.replace(/^(ht|f)tp(s)?:\/\//,"||").replace(/[\r\n](ht|f)tp(s)?:\/\//g,"/\n||").replace(/[\r\n]*$/,"/").replace(/\/\/$/,"/"));
f.Close();