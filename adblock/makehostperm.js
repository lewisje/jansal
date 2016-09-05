var fso = new ActiveXObject('Scripting.FileSystemObject');
function convert(inf, out, sel) {
 if (!fso.FileExists(inf)) return;
 var s = fso.OpenTextFile(file = inf, 1),
   f = fso.FileExists(out) ? fso.OpenTextFile(file = out, 8) :
                             fso.CreateTextFile(file = out, true), i;
 for (i = 0; !s.AtEndOfStream; i++) f.WriteLine('host\t' + sel + '\t2\t' + s.ReadLine());
 s.Close();
 f.Close();
}
convert('hostperm.txt', 'hostperm.4', 'cookie');
convert('hostperm.txt', 'hostperm.4', 'document');
convert('hostperm.txt', 'hostperm.4', 'dtd');
convert('hostperm.txt', 'hostperm.4', 'font');
convert('hostperm.txt', 'hostperm.4', 'geo');
convert('hostperm.txt', 'hostperm.4', 'image');
convert('hostperm.txt', 'hostperm.4', 'indexedDB');
convert('hostperm.txt', 'hostperm.4', 'install');
convert('hostperm.txt', 'hostperm.4', 'media');
convert('hostperm.txt', 'hostperm.4', 'object');
convert('hostperm.txt', 'hostperm.4', 'objectsubrequest');
convert('hostperm.txt', 'hostperm.4', 'other');
convert('hostperm.txt', 'hostperm.4', 'ping');
convert('hostperm.txt', 'hostperm.4', 'popup');
convert('hostperm.txt', 'hostperm.4', 'refresh');
convert('hostperm.txt', 'hostperm.4', 'script');
convert('hostperm.txt', 'hostperm.4', 'stylesheet');
convert('hostperm.txt', 'hostperm.4', 'subdocument');
convert('hostperm.txt', 'hostperm.4', 'xbl');
convert('hostperm.txt', 'hostperm.4', 'xmlhttprequest');