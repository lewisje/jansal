var http = new ActiveXObject('Microsoft.XMLHTTP'), fso = new ActiveXObject('Scripting.FileSystemObject'),
  v = new ActiveXObject('Shell.Application'), f = fso.CreateTextFile(file = 'C:\\WINDOWS\\System32\\DRIVERS\\etc\\hosts', true);
http.open('GET', website = 'https://raw.githubusercontent.com/lewisje/jansal/master/adblock/hosts', false);
http.setRequestHeader('Accept', 'text/plain');
http.send();
f.Write(http.responseText.replace(/0.0.0.0 /g,'127.0.0.2 '));
f.Close();
//http.open('GET', website = 'http://pgl.yoyo.org/as/serverlist.php?hostformat=proxyautoconfig&useip=127.0.0.2&mimetype=plaintext', false);
//http.setRequestHeader('Accept', 'text/plain');
//http.send();
//f = fso.CreateTextFile(file = 'C:\\WINDOWS\\System32\\DRIVERS\\etc\\proxy', true);
//f.Write(http.responseText);
//f.Close();
v.ShellExecute('nbtstat', '-R', '', 'open', 0);
v.ShellExecute('ipconfig', '/displaydns', '', 'open', 0);
