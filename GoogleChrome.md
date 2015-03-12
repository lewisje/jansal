# History #
In 2008, Google released a browser intended to be as standards-compliant as AppleSafari (based on the same HTML engine, Webkit, although forked since 2013 as the Blink project) and both faster (with the new V8 engine) and more secure (with separate, sandboxed processes for the tabs and PlugIns), Chrome, based on an open-source project called Chromium; it quickly became a hit among the digerati and has accelerated in popularity among the general public, and now there are interesting Chromium derivatives like Opera (formerly using its own Presto engine), Comodo Dragon (which uses Comodo Secure DNS internally), and SRWare Iron (for the privacy-sensitive among us, also the first Chromium derivative to include an effective implementation of AdBlock, known as AdblockIni, now deprecated).

Its fast startup makes Chrome (or recently, SRWare Iron) ideal as the default browser; if some external program launches a URL, often without your consent, you want to get it away quickly without waiting for things like reloading a session, and setting a quick-loading browser as the default allows you to do that (as long as it's not also the browser you do most of your actual Web browsing with).

Unfortunately, until the emergence of experimental extension support in version 4 (Google goes through version numbers quickly) and full support in version 5, there was no compelling reason to use Chrome on a regular basis; after at least partial content-blocking was enabled in version 6 due to an update to Webkit, Chrome became a viable option for secure Web browsing (AdBlock for Chrome had existed before then but merely used ElementHiding); it became competitive with FireFox when the Web Request API was introduced in version 17 and Content Settings API was introduced in version 16 (the Declarative Web Request API, still experimental as of version 30, should bring Chrome even closer to parity with FireFox).

Google maintains 5 different release channels for its browser; by default you get the Stable version, but you can instead join the Beta channel or the Dev channel. If on any of those channels, a Windows user can also install Chrome Canary, a secondary installation even more bleeding-edge than Dev that uses its own separate profile and cannot be set as the default browser.

Finally, the most adventurous testers can install nightly builds of Chromium, which do not auto-update or include the bundled Flash PlugIns or MP4 video decoder and cannot be run simultaneously with SRWare Iron, because they use the same profile.

All Chromium derivatives except for Chromium itself and SRWare Iron auto-update without even notifying the user (Chrome for Linux uses the system's package manager), and their unique architecture allows for all of the relevant files to be put into place even while the browser is running, to be executed instead of the old program files upon restart (most browsers must be shut down first, and AppleSafari on OS X and InternetExplorer even require rebooting upon updates because of their integration into the OS).

# Recommendations #
Install AdBlock (from Michael Gundlach's Betafish, Inc.) and follow the Recommendations; also enable click-to-play (Script Safe can also be useful but is a pain to configure and nowhere near as flexible as NoScript.

Additionally, install Vanilla, which clears after 30 minutes all cookies not whitelisted, and if on Windows, especially XP, Chrome IE Tab Multi, so that you can run Web applications requiring the InternetExplorer engine (like Microsoft Update on Windows versions before Vista) without launching InternetExplorer itself.

Consider installing Better Popup Blocker, which does have some notable FalsePositives with respect to framed content in Hotmail and other Webmail clients that can be overcome with vigilance.

Finally, consider allowing every single one of these extensions to run in Incognito mode, so that you are protected from malicious and annoying advertising even while trying to hide your porn browsing from relatives.

# Not Recommended #
KB SSL Enforcer too frequently leads to problems with sites that do not work properly when re-directed to HTTPS, even if they do not blacklist themselves; the effort required to manually blacklist each site is too great to recommend, requiring frequent trips to the Extensions menu (as opposed to the more easily accessible interfaces of Vanilla, Script Safe, Better Popup Blocker); also, HTTPS Everywhere still causes CPU usage to spike.

Flashblock (from ruzanow, not josorek) was once recommended, but now that click-to-play is accessible via about:flags since version 8, it has been utterly supplanted; unlike in OperaBrowser, the native ability to block PlugIns in Chrome works perfectly, even better than Flashblock.

Adthwart was faster than AdBlock but the means by which it is faster lead to less effective blocking and more reliance on ElementHiding; its successor, AdBlock Plus (by Eyeo Gmb H, founded by Wladimir Palant and Tom Joseph), is both slower and less effective than AdBlock, in particular refusing to use any sort of null-content redirection for blocked content.