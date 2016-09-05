var fso = new ActiveXObject('Scripting.FileSystemObject');
function convert(inf, out, bh, lim){
  'use strict';
  var s, f, i;
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
  while (!s.AtEndOfStream) {
    f.Write(bh);
    for (i = lim; i > 0 && !s.AtEndOfStream; i--) {
      f.Write(' ' + s.readLine().replace('0.0.0.0 ' , ''));
    }
  f.Write('\n');
  }
  s.Close();
  f.Close();
}
convert('hosts.txt', 'hostslt.txt', '0.0.0.0', 24);
convert('hostsu', 'hostsc', '0.0.0.0', 24);
convert('hostsbkp', 'hosts', '0.0.0.0', 9);
convert('hostsbk', 'hostslt', '192.168.1.254', 9);
convert('hostsig', 'hostslrg', '0.0.0.0', 24);