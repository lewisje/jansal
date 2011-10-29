var fso,s,f,i;
function convert(inf,out,bh,lim){
 fso=new ActiveXObject("Scripting.FileSystemObject");
 if(!fso.FileExists(inf))return;
 s=fso.OpenTextFile(file=inf,1);
 f=fso.CreateTextFile(file=out,true);
 f.WriteLine("127.0.0.1 localhost");
 f.WriteLine("::1 localhost");
 f.WriteLine("255.255.255.255 broadcasthost");
 f.WriteLine("46.246.119.139 status.block.aid");
 while(!s.AtEndOfStream){
  f.Write(bh);
  for(i=0;i<lim && !s.AtEndOfStream;i++){
   f.Write(" "+s.readLine().replace("0.0.0.0 ",""));
  }
  f.Write("\n");
 }
 s.Close();
 f.Close();
}
convert("hosts.txt","hostslt.txt","0.0.0.0",24);
convert("hostsu","hostsc","0.0.0.0",24);
convert("hostsbkp","hosts","0.0.0.0",9);
convert("hostsbk","hostslt","192.168.1.254",9);