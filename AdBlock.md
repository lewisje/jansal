# Adblock: Content-Filtering Extensions #
Ever since the early days of Mozilla Phoenix (which would be renamed Firebird and then FireFox), there has been [at least one extension](http://forums.mozillazine.org/viewtopic.php?t=3829) marketed as an ad-blocker, such as Adblock; at first they could only hide downloaded content via ElementHiding, but around 2006, Wladimir Palant, from Germany, released a new version of the Adblock Plus fork that actually kept content from being downloaded by monitoring HTTP requests and blocking those that matched a filter in a blocklist and no filters in a whitelist.

The idea behind Adblock Plus was used as well as practicable in some minor browsers, like Konqueror and QTWeb, and as GoogleChrome and AppleSafari developed their own extension systems, ad-blocking extensions came to be the most popular offerings, just as on FireFox; even InternetExplorer started to benefit, with Simple Adblock (which sadly became a paid extension and does suffer from FalsePositives), but Opera went its own way, with a UrlFilter list that must be modified manually (not programmatically via an extension) and can only be changed when the browser is closed or via its own "Block Content" interface (the SRWare Iron fork of GoogleChrome used a more limited idea called AdblockIni that cannot be updated at all while the browser is running; at first it was the only way to block content in any Chromium-based browser and is still the only reliable way to do so).

Although marketed to keep ads from annoying users, these extensions also allow for faster browsing with less cache usage (because content is not downloaded) and greater PassiveSecurity by blocking most vectors of malvertising (and if the right filter lists are chosen, some URLs primarily used for malware distribution); note that the extensions do not prevent people from navigating to URLs, they just block HTTP requests made within the page, like to retrieve images, scripts, and content for PlugIns, while the similar UrlFilter and AdblockIni also block navigation to URLs.

# Recommended Extensions #
## Firefox (1.5+) ##
[Adblock Plus](https://adblockplus.org/) is the original and best content-filtering implementation on any browser, capable of perfectly blocking content from being downloaded (even within plugins like Flash, so advertisements in videos can be blocked), with lists that can be automatically updated and include whitelists, ElementHiding, and a powerful and flexible syntax; consider also the [Adblock Plus Pop-Up Addon](http://jessehakanen.net/adblockpluspopupaddon/) by Jesse Hakanen if you are stuck with an older version of FireFox that Adblock Plus 2.0 does not support.

## Chrome (4+) ##
[Adblock Plus for Google Chrome™](https://chrome.google.com/extensions/detail/cfhdojbkjhnklbpkdaibdccddilifddb) (formerly Adthwart from Tom Joseph of the United States) is now superior to Michael Gundlach's [Adblock for Chrome](http://chromeadblock.com/) because it blocks just as much yet runs faster and uses less memory; both extensions now register the abp: pseudo-protocol, just like Adblock Plus for FireFox, but Gundlach did it first.

An important limitation of Chrome itself (until the Web Request API) was that extensions could not modify plugin content, so most advertising inside Flash videos would still go through, but that isn't a serious security risk; notably Youtube ads could still be blocked, because they rely on Flash parameters within the HTML code, which can still be manipulated (with the Web Request API stable, this is no longer treated as a special case).
However, with the Web Request API (experimental until Chrome 17), content-blocking in Chrome is almost at parity with Firefox; if you want to see the latest enhancements from the ABP team you can [try the experimental extension now](https://adblockplus.org/devbuilds/adblockpluschrome-experimental/00latest.crx).

## Safari (5+) ##
[Adblock for Safari](http://safariadblock.com/) is based on Adblock for Chrome and written by the same author shortly after extension support was added; this extension actually blocks content perfectly because Safari does not suffer from [the subtle timing issue](https://code.google.com/p/chromium/issues/detail?id=35897) that Chromium does.

There once were some cumbersome programs for the OS X version of AppleSafari, but they are no longer supported now that version 5 supports proper extensions; users of OS X Tiger and earlier (which do not support version 5) should search for sites that offer old software while they consider upgrading, possibly at substantial cost.

## Internet Explorer (6+) ##
[Simple Adblock](http://simple-adblock.com/), which comes with hard-coded subscriptions and a limited ability to add filters manually to a particular text file, was once recommended but now is only for those willing to deal with FalsePositives and pay $29.95; unlike InPrivate Filtering, this works on IE6 and IE7 too, and it also allows for ElementHiding.

## Opera (11.10+) ##
The most popular OperaBrowser extension, No Ads Advanced, uses subscriptions complying with the URL Filter API, but the port of Adblock Plus is probably superior now.

## SRWare Iron (3-16) ##
[Adblock+ Element Hiding Helper](https://chrome.google.com/extensions/detail/chmimgmjdabgiilljdjfbonifbhiglao), which uses only the ElementHiding rules and works in concert with AdblockIni, may clear some of the empty spaces left behind when content is blocked; however, with current versions of Iron, you should use the same extension as recommended for other Chromium-based browsers, Adblock Plus for Google Chrome, because of (experimental until version 17) support for the new Web Request API.

# Recommended Filter Lists #
## General/Privacy ##
[Fanboy Adblock](https://secure.fanboy.co.nz/) (maintained primarily by Fanboy and Nitrox) is the best overall ad-blocking list in existence, optimized for the filtering engine of Adblock Plus and similar extensions; it may be offered as a default in your extension, but Simple Adblock uses [EasyList](https://easylist.adblockplus.org/) (a less powerful list) exclusively. Be sure to add a regional list corresponding to the region you live in, but even if you commonly read pages from around the world, [don't add too many subscriptions](http://adblockplus.org/en/getting_started#subscription) or you will [greatly bog down](https://code.google.com/p/adblockforchrome/wiki/FrequentlyAskedQuestions#Do_you_recommend_to_subscribe_to_all_filter_lists?) whatever ad-blocking extension you use; in Simple Adblock a regional supplement will be downloaded based on what region you live in, and because I read a lot of sites based in Germany, I set my country to be Germany (Deutschland), even though I have always lived in the United States, just to get some additional filters.

The Tracking subscription may also be nice (I recommend using the [combined International Tracking subscription](https://secure.fanboy.co.nz/fanboy-tracking-complete.txt)), but in Simple Adblock Beta on IE9 it leads to numerous false positives hiding much of the content of Google pages; also, the previously-recommended way to automatically make InPrivate Filtering lists relies on the version of Easy List [without its ElementHiding filters](https://easylist-downloads.adblockplus.org/easylist_noelemhide.txt), because InPrivate Filtering does not use them.

## Direct Malware Filtering ##
[Malware Domains](https://easylist-downloads.adblockplus.org/malwaredomains_full.txt) is offered directly from the Adblock Plus [subscription list page](http://adblockplus.org/en/subscriptions), and you may also consider the list offered by [Malware Patrol](https://www.malwarepatrol.net/lists.shtml) (link goes to page where you can get a free subscription); in addition, I have turned the [Sucuri blacklist](http://tools.sucuri.net/blacklist/MH-sitelist.txt) into [an Adblock Plus subscription](http://jansal.net/m.txt), updated occasionally.

## Adult ##
Unfortunately, the maintainers of Easy List are wary of dealing with [the intricate and aggressive measures](https://docs.google.com/viewer?url=http://weis2010.econinfosec.org/papers/session2/weis2010_wondracek.pdf) used by adult websites to deliver advertisements, so their policy is to leave those ads alone, even though they are among the worst offenders at delivering malvertising, because of the risk of FalsePositives is so high; that's why a New Zealander, [Fanboy](https://secure.fanboy.co.nz/), has made a supplemental [Adult/Dating Blocking](https://secure.fanboy.co.nz/fanboy-adult.txt) list for this purpose.
This supplement may profitably be used in the [easylist\_personal.txt](http://simple-adblock.com/faq/personal-filters/) file in Simple Adblock, so that the dangerous adult ads may be blocked in InternetExplorer too.

However, for people using the currently recommended Fanboy Adblock list, no separate adult-related subscription is necessary; additionally, people using the leaner (but linguistically limited) [Adversity](http://adversity.uk.to/) list by Hubird (from Australia, despite what ".uk.to" suggests) will also have no need for a separate adult-related subscription.

Note that these lists merely block adult _advertisements_ and not adult websites; subscriptions likely exist, and filters can be created, to block most pornographic content, but the intention behind this whole project is to enhance security _without_ keeping you from doing what you want to do, even if that includes watching pornography.

## Facebook Annoyances ##
The makers of Easy List have made a supplemental subscription that hides annoyances [in the sidebar and News Feed](https://easylist-downloads.adblockplus.org/fb_annoyances_full.txt), along with separate subscriptions for [just the sidebar](https://easylist-downloads.adblockplus.org/fb_annoyances_sidebar.txt) and [just the News Feed](https://easylist-downloads.adblockplus.org/fb_annoyances_newsfeed.txt); go to [the project page](http://facebook.adblockplus.me/) for more information.

## Popup Blocking ##
The creator of the [Adblock Plus Pop-Up Addon](http://jessehakanen.net/adblockpluspopupaddon/), Jesse Hakanen from Finland, has also created a small [subscription](https://popblock.googlecode.com/hg/popup-block.txt) for blocking popups on certain websites; this list is still useful for the newest version of Adblock Plus for FireFox, which includes popup-blocking capability.

## Chrome Workarounds ##
These should already be pre-selected in whichever extension you chose, but just in case, you can directly access the workarounds created by [Michael Gundlach](http://chromeadblock.com/filters/adblock_custom.txt), [Tom Joseph](http://adthwart.qux.us/filters/recommended.txt), and [Wladimir Palant](https://easylist-downloads.adblockplus.org/chrome_supplement.txt); Joseph's workarounds are said to have been merged into the recommended general subscription, and Gundlach's list is recognized only by his own extensions, so you can copy it into the manual-filters section of his competitor, and for Adblock Plus on FireFox you can download that file, add the required line at the beginning, and just import it directly as a set of manual filters.

These lists have been pared down as Chrome's content-blocking ability has approached parity with that of Firefox, and now that the Web Request API became stable in Chrome 17, it is _de minimis_.

## Miscellaneous ##
The [Rickroll Blacklist](http://rickrolldb.com/ricklist.txt) will never give you up, let you down, run around and desert you, make you cry, say goodbye, or tell a lie and hurt you, and it doesn't need a terrible yet catchy video to say it.

If those cookie-usage notices required by EU privacy law are bothering you, the [Prebake](https://raw.github.com/liamja/Prebake/master/obtrusive.txt) subscription will do away with them.

The [Adversity Antisocial](https://adversity.googlecode.com/hg/Antisocial.txt) and [Fanboy's Annoyances](https://secure.fanboy.co.nz/fanboy-addon.txt) lists are for those of us tired of nearly every site on the Internet asking us to Like them, Tweet their pages, Stumble Upon them, Digg them, or say we Reddit; it doesn't really add much in the way of security, and may break some websites that rely on Facebook for authentication, but it may make some sites run much faster and help stem any new [XSRF](http://www.cgisecurity.com/csrf-faq.html) vulnerabilities found in social media.
Note that this list does not block the main pages of these sites, so Facebook, Twitter, and other services will continue to work; subscriptions likely exist, and filters can be created, to block most social-networking sites, but the intention behind this whole project is to enhance security _without_ keeping you from doing what you want to do, even if that includes social networking when you are supposed to be at work.

[Peter Lowe's AdServers](http://pgl.yoyo.org/as/serverlist.php?hostformat=adblockplus&showintro=0&mimetype=plaintext) or [this version for the old AdBlock](http://pgl.yoyo.org/as/serverlist.php?hostformat=adblock&showintro=0&mimetype=plaintext) may seem a bit redundant if you use the HostsFile version, but this one does block sub-domains of the listed domains.

# Not Recommended #
Easy List is too lenient toward first-party advertising, and the Adversity list is not associated with any language-related supplements and therefore is only useful for those browsing the Anglophone Web, so in general Fanboy Adblock is preferred, but they're not _terrible_ subscriptions; however, no other general-purpose subscription is recommended, in particular Adblock Rules, which is about to shut down and transfer all of its users to Easy List.

Be sure to uncheck the box labeled "allow some non-intrusive advertising" even though what it allows does not slow down browsing much or introduce significant security threats; content should only be whitelisted to ensure usability, like if a Flash-based video-player refuses to work if the video ads are blocked.

Also, I no longer recommend Simple Adblock for InternetExplorer; instead you should rely on an InPrivate Filtering list (IE8, Windows XP) or TrackingProtection List (IE9, Vista or later).