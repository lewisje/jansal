# Not Just for P2P Users #
[PeerBlock](http://www.peerblock.com/), and its predecessor Peerguardian, are best known as programs that keep the spying eyes of anti-piracy organizations from tracking your torrent and other p2p activity, but here it will be used to block a large number of IP addresses for known ad-servers and malware sites from being accessed by any program on your computer; it's the flip side of using the HostsFile: While that re-directs bad domain names to safer IP addresses, this one blocks the IP addresses directly.

Just like using an ad- and malware-blocking HostsFile, this will also keep some malware that may make it onto your computer from working; it may be a bot trying to access a certain IP address used by a command-and-control server, and if that IP is blocked, you will not inadvertently help to send e-mail or forum spam. This program, and similar IP filters, are good not only for your computer but for the Internet as a whole.

Notably, although it is possible to [use the route command](http://www.ohmpie.com/stopphoninghome/) to block particular IP addresses or [a professionally-maintained blacklist](http://www.malware-control.com/community-resources/free-delayed-version/) (with [a wonderful security scan](http://www.malware-control.com/en/safe-network-scan/?test) to promote it), they are rather bothersome for mass-blocking, especially use of the route command, and Peer Block is generally the way to go.

# Recommendations #
Don't use any of the built-in lists; instead add these lists from Bluetack, all set to be updated daily:
  * [Malicious Hackers](http://list.iblocklist.com/?list=bt_dshield&fileformat=p2p&archiveformat=gz)
  * [Forum Spammers](http://list.iblocklist.com/?list=ficutxiwawokxlcyoeye&fileformat=p2p&archiveformat=gz)
  * [Spammers](http://list.iblocklist.com/?list=bt_hijacked&fileformat=p2p&archiveformat=gz)
Also consider the [ZeuS tracker](http://list.iblocklist.com/?list=ynkdjqsjyfmilsgbogqf&fileformat=p2p&archiveformat=gz) and a list I extracted from the [Spybot immunizations](http://lewisje.github.io/spybot.txt.gz).

Next, go to the Settings menu, choose to log nothing, and turn off notifications.

Then go to the next page and choose "Start with Windows" and "Always start hidden" under Startup, then "Check Peerblock" and "Check Lists" and "Auto-update every 1 days" and "Auto-close update window after 0 seconds" and "Update at startup" under Updates, and then "Always hide tray icon" and "Minimize to tray on close" under Miscellaneous, and finally Save and exit the Settings menu; Peerblock should be completely out of your way, blocking in the background, but if you want to interact with it again, just look for it in the Start Menu.

If you use Vista or later, follow these [steps to make PeerBlock start at logon](http://www.peerblock.com/userguide/how_to_use/htu-useraccountcontrol), because the method it uses fails to work under User Account Control.

# Not Recommended #
Basically, if I didn't list it, don't use it; in particular you should uncheck the P2P list and not use the Education list, unless you don't want to visit Apple (or use iTunes) or such websites as Harvard, MIT, or your _alma mater_.

Also, [Peter Lowe's Ad Servers](http://pgl.yoyo.org/as/iplist.php?ipformat=peerblock&showintro=0&mimetype=plaintext) appears to have some FalsePositives that the HostsFile version does not have, because some ad servers reside on the same IP addresses as legitimate sites; so do [Web Exploits](http://list.iblocklist.com/lists/bluetack/web-exploit) (Bluehost login) and [Bad Peers](http://list.iblocklist.com/lists/bluetack/bad-peers) (Fukung) and all of the built-in lists, even Spyware (Cincinnati Modern) and Advertising (eHow).

Apparently [Bogon](http://list.iblocklist.com/lists/bluetack/bogon) from Bluetack blocks 244.0.0.252, the address used for Link-Local Multicast Name Resolution (LLMNR) on IPv4, while the [list by Atma](http://list.iblocklist.com/lists/atma/atma) blacklists the Border Gateway Protocol (BGP) address used by well-known IPv6 tunnel-broker Hurricane Electric (bgp.he.net).
