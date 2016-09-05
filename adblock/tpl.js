var http = new ActiveXObject('Microsoft.XMLHTTP'),
  fso = new ActiveXObject('Scripting.FileSystemObject'),
  W = ['https://notabug.org/latvian-list/adblock-latvian/raw/master/lists/latvian-list.txt',
   'https://raw.githubusercontent.com/tomasko126/easylistczechandslovak/master/filters.txt',
//   'https://secure.fanboy.co.nz/fanboy-dimensions.txt',
   'https://secure.fanboy.co.nz/fanboy-adult.txt',
   'https://easylist-downloads.adblockplus.org/fanboy-annoyance.txt',
//   'https://secure.fanboy.co.nz/fanboy-p2p.txt',
//   'https://secure.fanboy.co.nz/adblock-gannett.txt',
//   'https://secure.fanboy.co.nz/fanboy-tracking-complete.txt',
//   'https://secure.fanboy.co.nz/r/fanboy-complete.txt',
//   'https://secure.fanboy.co.nz/r/fanboy-ultimate.txt',
   'https://secure.fanboy.co.nz/enhancedstats.txt',
//   'https://secure.fanboy.co.nz/fanboy-chinese.txt',
   'https://secure.fanboy.co.nz/fanboy-espanol.txt',
   'https://secure.fanboy.co.nz/fanboy-indian.txt',
//   'https://easylist-downloads.adblockplus.org/easylistitaly.txt',
   'https://secure.fanboy.co.nz/fanboy-japanese.txt',
   'https://secure.fanboy.co.nz/fanboy-korean.txt',
   'https://secure.fanboy.co.nz/fanboy-polish.txt',
   'https://secure.fanboy.co.nz/fanboy-swedish.txt',
   'https://secure.fanboy.co.nz/fanboy-turkish.txt',
   'https://secure.fanboy.co.nz/fanboy-vietnam.txt',
//   'https://secure.fanboy.co.nz/israelilist/IsraelList.txt',
   'http://ideone.com/plain/K452p',
//   'https://adversity.googlecode.com/hg/Antisocial.txt',
//   'https://adversity.googlecode.com/hg/Adversity.txt',
//   'https://adversity.googlecode.com/hg/Adversity-Adult.txt',
//   'https://adversity.googlecode.com/hg/Adversity-p2p.txt',
//   'https://adversity.googlecode.com/hg/Adversity-Tracking.txt',
//   'http://dev.mathiasbaert.be/misc/facebook-connect-optout-adblockplusfilter.txt',
//   'http://adblockrules.org/download.php?type=all&title=adblockrules.org',
//   'https://popblock.googlecode.com/hg/popup-block.txt',
//   'https://easylist-downloads.adblockplus.org/malwaredomains_full.txt',
//   'http://malwarepatrol.com/cgi/submit?action=list_adblock',
   'https://lists.malwarepatrol.net/cgi/getfile?receipt=f1379438547&product=8&list=mozilla_adblock',
   'http://rickrolldb.com/ricklist.txt',
   'https://raw.githubusercontent.com/liamja/Prebake/master/obtrusive.txt'/*,
   'http://www.jabcreations.com/downloads/adblock-filters.php',
   'http://dl.dropbox.com/u/41223373/SOPA%20Filter/SOPA%201.5%20%5BFervisus%5D.txt',
   'https://monzta.maltekraus.de/adblock_social.txt'*/], fRegex = /[-\w\.]*$/, i = 0, f;
while (i < W.length) {
 f = fso.CreateTextFile(file = 'subscriptions\\' + W[i].match(fRegex), true);
 http.open('GET', website = W[i++], false);
 http.setRequestHeader('Accept', 'text/html');
 http.send();
 f.Write(http.responseText);
 f.Close();
}
f = fso.GetFile('subscriptions\\filters.txt');
f.name = 'easylist-czech-slovak.txt';
//f = fso.GetFile('subscriptions\\fanboy-chinese.txt');
//f.name = 'fanboy-adblocklist-chn.txt';
f = fso.GetFile('subscriptions\\fanboy-indian.txt');
f.name = 'fanboy-adblocklist-ind.txt';
//f = fso.GetFile('subscriptions\\easylistitaly.txt');
//f.name = 'fanboy-adblocklist-ita.txt';
f = fso.GetFile('subscriptions\\fanboy-korean.txt');
f.name = 'fanboy-adblocklist-krn.txt';
f = fso.GetFile('subscriptions\\fanboy-polish.txt');
f.name = 'fanboy-adblocklist-pol.txt';
f = fso.GetFile('subscriptions\\fanboy-swedish.txt');
f.name = 'fanboy-adblocklist-swe.txt';
f = fso.GetFile('subscriptions\\fanboy-turkish.txt');
f.name = 'fanboy-adblocklist-tky.txt';
f = fso.GetFile('subscriptions\\fanboy-vietnam.txt');
f.name = 'fanboy-adblocklist-vtn.txt';
f = fso.GetFile('subscriptions\\fanboy-annoyance.txt');
f.name = 'fanboy-adblocklist-addon.txt';
//f = fso.GetFile('subscriptions\\fanboy-p2p.txt');
//f.name = 'fanboy-adblocklist-current-p2p.txt';
f = fso.GetFile('subscriptions\\enhancedstats.txt');
f.name = 'enhancedstats-addon.txt';
//f = fso.GetFile('subscriptions\\fanboy-tracking-complete.txt');
//f.name = 'fanboy-adblocklist-stats-intl.txt';
//f = fso.GetFile('subscriptions\\adblock-filters.php');
//f.name = 'adblock-filters.txt';
//f = fso.GetFile('subscriptions\\adblockrules.org');
//f.name = 'adblockrules.txt';
f = fso.GetFile('subscriptions\\mozilla_adblock');
f.name = 'malpatrol.txt';
f = fso.GetFile('subscriptions\\K452p');
f.name = 'adblock-persian.txt';
//W = 'http://web.archive.org/web/20120418162733/http://tools.sucuri.net/blacklist/MH-sitelist.txt';
//W = 'http://tools.sucuri.net/blacklist/MH-sitelist.txt';
//f = fso.CreateTextFile(file = 'subscriptions\\m.txt',true);
//http.open('GET',website = W,false);
//http.setRequestHeader('Accept','text/html');
//http.send();
//f.Write('[Adblock]\n' + http.responseText.replace(/^(?:ht|f)tps?:\/\// , '||').replace(/[\r\n](?:ht|f)tps?:\/\//g, '/\n||').replace(/[\r\n]*$/, '/').replace(/\/\/$/, '/'));
//f.Close();