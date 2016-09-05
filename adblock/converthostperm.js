var fso = new ActiveXObject('Scripting.FileSystemObject');
function convert(inf, out, rgx) {
 if (!fso.FileExists(inf)) return;
 var s = fso.OpenTextFile(file = inf, 1), f = fso.CreateTextFile(file = out, true), i;
 while (!s.AtEndOfStream) {
  for (i = 0; !s.AtEndOfStream; i++) f.Write(s.readLine().replace(rgx, '') + '\n');
  f.Write('\n');
 }
 s.Close();
 f.Close();
}
convert('hostperm.4', 'hostperm.3', /.*\t(?:indexedDB|media)\t.*/g);
convert('hostperm.3', 'hostperm.2', /.*\t(?:font|geo)\t.*/g);
convert('hostperm.2', 'hostperm.1', /.*\t(?:dtd|objectsubrequest|ping|xbl|xmlhttprequest)\t.*/g);