# History #
After the days of floppy-boot-sector viruses and before the age of malvertising, the most common means of malware propagation was through worms exploiting vulnerable applications listening on certain network ports, like 25 (SMTP, for e-mail) or 21 (FTP); until 2001, Windows did not even come with a firewall, it was not turned on by default until 2004, and even today it may lack outbound filtering by default (to keep bots from joining botnets or sending out spam).

# Recommendations #
Get a router if you don't have one already; its NAT ([Network Address Translation](http://www.grc.com/faq-shieldsup.htm)) capability effects a degree of inbound filtering. Also use your operating system's firewall, unless your VirusScanner includes its own as part of an integrated security suite; for versions of Windows before XP, use the old [Sygate](http://www.oldapps.com/old_version_sygate_firewall.php) firewall, from before its acquisition by Symantec and conversion into Norton Firewall. For those modern Windows users desiring more outbound filtering, get [Comodo](http://www.comodo.com/home/internet-security/firewall.php).

# Not Recommended #
If your computer is directly connected to the modem without a router or a firewall, you will likely get a worm [in a few minutes](http://www.firewallguide.com/).