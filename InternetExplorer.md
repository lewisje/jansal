# Introduction #
Microsoft Internet Explorer is by far the most widely used Web browser in the world, mostly because it has been bundled with Windows, the most popular desktop and notebook operating system by an even greater margin, since 1998; it is also popular among Information Technology departments for its ability to be managed via Group Policy and Active Directory Administrative Templates (although tools are available for [Firefox](http://sourceforge.net/projects/firefoxadm/) on Windows, [old versions of Opera](https://web.archive.org/web/20130302151640/http://www.opera.com/support/mastering/sysadmin/) on Windows and Linux, and [Chrome](https://www.google.com/support/a/bin/answer.py?answer=187945) on Windows, OS X, and Linux) and its legacy support for very old Intranet applications making use of ActiveX controls written back when versions 4 through 6 were the best browsers available for free and were much more dominant than IE is now.

Unfortunately, ActiveX provides a massive attack vector, because the controls can be installed without even restarting the browser and have all of the privileges of the user, and in the old days they were commonly used in "browse and get owned" pages and still are used by some forms of malware, which install toolbars and other BHOs without the user's knowledge or consent; recent versions have enhanced the basic security of ActiveX, starting with the Add-Ons Manager and end to automatic ActiveX installation in IE6 SP2 and continuing with the Smart Screen Filter in IE8 and a feature in IE9 that prevents BHOs installed by external programs from automatically being enabled.

Also, although Microsoft was once lax about security in its Web browser, it is now vigilant, with updated lists of ActiveX KillBits and security patches for all supported versions (IE7 and later) released on a regular basis, along with its own Malware Removal Tool and a VirusScanner (Microsoft Security Essentials) that integrates with Internet Explorer.

# Recommendations #
## Privacy ##
Download the XML file from [Privacy Choice](https://jansal.googlecode.com/svn/trunk/adblock/PrivacyChoice-TrackerBlock-No-Oversight-Companies.xml) (old version from 16 September 2014, shortly before Privacy Choice was acquired by AVG and ceased offering TrackerBlock) and Import it from the Privacy tab in Internet Options to block most tracking cookies; be sure to enable cookies for paypal.com, though (TrackerBlock blocked that domain).

## Killbits ##
Although Microsoft releases its own list of ActiveX KillBits, you should add some more, to stop malware and annoyances from hooking into Internet Explorer, and even if you don't use IE for your daily Web browsing, many Windows applications use it internally, so you should keep IE secured and up-to-date.

Use [Spybot](http://www.safer-networking.org/en/spybotsd/index.html) with [this set of Registry tweaks](https://jansal.googlecode.com/svn/trunk/adblock/SpybotTweaks.reg) and [this updated Immunization program](http://www.spybotupdates.com/updates/files/temp/SDImmunize.zip), which should be placed in the Spybot program directory; Immunize everything. SpyBot will keep some cookies from being downloaded, but because the importation of the Privacy Choice list removes that immunization, you should do that step first. Immunization of PlugIns means adding the ActiveX KillBits.
If you will be using my custom-compiled HostsFile, just download a [fresh copy](https://jansal.googlecode.com/svn/trunk/adblock/hosts), which should be updated every Wednesday (when Patrick Michael Kolla (developer of SpyBot) updates the immunizations) to replace it, because SpyBot will output an unoptimized version of that HostsFile.
Finally, don't use SpyBot for any purpose other than immunization: Its scanning engine is too slow and ineffective at capturing today's malware, and its Tea Timer and IE Protection modules are annoying and provide no real security.

Use [SpywareBlaster](http://www.brightfort.com/spywareblaster.html) with [this Custom Blocking List](http://koti.mbnet.fi/pattaya1/customblocking.txt) and after updating, protect all items except for Restricted Sites, and then go to Tools and then Custom Blocking and protect all of those entries too; if you want you can also use this program to keep Flash from running in IE at all, and then your users won't get so much as a request to install Flash (which happens if your users do not have Flash installed and browse a site in IE that uses Flash), but I don't recommend such a drastic measure.

## Ad-Blocking ##
Use a special method I found to easily update your InPrivate filters in IE8 and automatically enable InPrivate Filtering (in IE9+ use TrackingProtection Lists and disable your custom list); you may also consider using AdBlock Plus for IE6+, once it gets out of beta.

### Element Hiding ###
AdBlock Plus uses ElementHiding filters, but InPrivate Filtering and TrackingProtection do not.

# Not Recommended #
IE7Pro is too bloated to recommend even though it does effectively prevent PlugIns from auto-launching, while Quero Toolbar is an admirable yet faulty attempt to provide script-blocking in IE; also remember that if a large number of sites are in any Zone (most commonly Restricted Sites), IE will take a long time to load, to keep only those sites that cannot be blocked altogether via the HostsFile, namely IP addresses.

Simple AdBlock suffers from occasional FalsePositives and now costs $29.95 for the fully functional version.

The Privacy Choice list for [All Companies](http://www.privacychoice.org/trackerblock/all_companies) has some particularly nasty FalsePositives, keeping people from logging into e-mail accounts at well-known advertisers AOL and Yahoo!; also don't use its more aggressive TrackingProtection List, and stay away from the TRUSTe list, which is more infamous for false _negatives_, letting many an ad-server go free.

ActiveX Filtering is more trouble than it's worth: It lacks the granularity to un-block content on an object-by-object basis, and instead it either blocks all content embedded on a site or none of it.

I previously advocated [an alternate stylesheet](https://jansal.googlecode.com/svn/trunk/adblock/userContent.css)  and later [Fanboy's special user stylesheet](https://secure.fanboy.co.nz/opera/fanboy-adblocklist-elements-v4.css) for some ElementHiding, but I noticed FalsePositives keeping the Chatterbox from loading on The Wolf Web, among other things.

[Ghostery](http://www.ghostery.com/) once was the only reliable way to block at least _some_ scripts, but its interface is significantly more difficult to use in IE than in the other browsers that it is supported with (FireFox, GoogleChrome, and AppleSafari), and its interference with the Google Maps widgets embedded in several websites can be considered a false positive.

[TrendMicro BrowserGuard](http://free.antivirus.com/browser-guard/) claims to block malicious Javascript that exploits zero-day vulnerabilities, but it runs all of the time, even when IE is not in use, and its effectiveness is questionable.

Do not clear your History unless you also wish to clear the list of sites you have set to use Compatibility View.