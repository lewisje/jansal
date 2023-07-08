var fso = new ActiveXObject('Scripting.FileSystemObject');
function convert(inf, out, bh, b6, lim) {
  'use strict';
  var l = [], s, f, i, t;
  if (!fso.FileExists(inf)) return;
  s=fso.OpenTextFile(file=inf, 1);
  f=fso.CreateTextFile(file=out, true);
  f.WriteLine('127.0.0.1 localhost');
  f.WriteLine('::1 localhost ip6-localhost ip6-loopback');
  f.WriteLine('fe00::0 ip6-localnet');
  f.WriteLine('ff00::0 ip6-mcastprefix');
  f.WriteLine('ff02::1 ip6-allnodes');
  f.WriteLine('ff02::2 ip6-allrouters');
  f.WriteLine('255.255.255.255 broadcasthost');
  f.WriteLine('46.246.119.139 status.block.aid');
  f.WriteLine('45.88.200.206 sneed.today www.sneed.today');
  f.WriteLine('104.31.76.4 eroshare.com');
  f.WriteLine('104.31.77.4 eroshare.com');
  f.WriteLine('2400:cb00:2048:1::681f:4c04 eroshare.com');
  f.WriteLine('2400:cb00:2048:1::681f:4d04 eroshare.com');
  while (!s.AtEndOfStream) {
    l.length = 0;
    for (i = lim; i-- && !s.AtEndOfStream;) l.push(s.readLine().replace('0.0.0.0 ' , ''));
    t = l.join(' ');
    f.WriteLine(bh + ' ' + t);
    //f.WriteLine(b6 + ' ' + t);
  }
  s.Close();
  f.Close();
}
convert('hosts.txt', 'hostslt.txt', '0.0.0.0', '::', 24);
convert('hostsu', 'hostsc', '0.0.0.0', '::', 24);
convert('hostsbkp', 'hosts', '0.0.0.0', '::', 9);
convert('hostsbk', 'hostslt', '192.168.1.254', '::', 9);
convert('hostsbig', 'hostslrg', '0.0.0.0', '::', 24);
convert('hosts.windows', 'hostsult', '0.0.0.0', '::', 9);
