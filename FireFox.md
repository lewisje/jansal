# Immunization #
Use SpyBot and SpywareBlaster to keep certain popups from launching or cookies from being set.

# Ad-Blocking #
Install AdBlock Plus and follow the recommendations in that article; also consider the Popup Addon, but don't get things like Element Hiding Helper or the Diagnostics Addon unless you are maintaining filter lists yourself, because the lists have plenty of ElementHiding rules for you.

# Plugin/Script Blocking #
Install NoScript and follow the recommendations in that article; in particular, ensure that Plugins are still blocked even on whitelisted sites, so that PlugIns never auto-launch.

# Other Recommendations #
Install [HTTPS Everywhere](http://www.eff.org/https-everywhere) to enjoy more end-to-end encryption at your favorite sites and prevent attackers using Wireshark or Firesheep from stealing your session cookies at unencrypted public Internet hotspots and then impersonating you; unfortunately this does break Facebook Chat and some features of Windows Live, so disable it on those sites.

Install [Long URL Please](http://www.longurlplease.com/) so that you won't be deceived by URL shorteners.

Install [VTZilla](http://www.virustotal.com/advanced.html) to send suspicious files to Virus Total.

Install [Firefox MHR](http://www.team-cymru.org/Services/MHR/FirefoxMHR/) to check your downloads against Team Cymru's malware database.

If you have a command-line VirusScanner, install [Download Statusbar](https://addons.mozilla.org/en-US/firefox/addon/26/) and set it to scan all downloads with the VirusScanner.

Finally, for those few times when you need to use the InternetExplorer engine if on Windows (like using Microsoft Update before Vista), install [IE Tab +](https://addons.mozilla.org/en-US/firefox/addon/52809/), which integrates with AdBlock Plus.

If you are especially paranoid, consider extensions like [RequestPolicy](https://addons.mozilla.org/en-US/firefox/addon/9727/) to protect against XSRF (although NoScript does plenty of that) and [CS Lite](https://addons.mozilla.org/en-US/firefox/addon/5207/) to fine-tune cookie control; if you use Tor or a filtering proxy (not recommended), consider [FoxyProxy](https://addons.mozilla.org/en-US/firefox/addon/2464/).

# Not Recommended #
While Privacy Choice makes a great offering for InternetExplorer, its Firefox extension causes the browser to hang; also do not install Ghostery or Stop Autoplay, because they are both redundant with a properly-configured NoScript installation, and Stop Autoplay actually breaks IE Tab + because it blocks all PlugIns, even the one installed by the IE Tab + extension.