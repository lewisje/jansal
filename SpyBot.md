_It's not even that good at Immunization, just use my HostsFile_

# History #
Back in 2000, Patrick Michael Kolla was a college student eager to remove a couple annoying pieces of adware, and he wrote what would later become [Spybot - Search & Destroy](https://en.wikipedia.org/wiki/Spybot_%E2%80%93_Search_&_Destroy); it became immensely popular as one of the first scanners for adware, spyware, and other malware that do not directly infect files as viruses do but still cause all manner of undesirable effects, and in particular it was highly recommended when I entered college in 2003. Its innovative Immunization engine used features provided by the browsers and the operating system to automatically protect against malicious websites, ActiveX controls, and tracking cookies.

Unfortunately, the Spybot scanning engine is now the slowest of the bunch, it lags behind the competition in detecting the latest threats, and its Tea Timer module provides a great deal of annoyance (throwing up a prompt at the slightest Registry change) and hogs resources while providing little security; its only redeeming value, and the only reason I still use it after 2008, is its Immunization feature.

# Recommendations #
When installing Spybot, go into Services to disable the various auto-running services.

If you use OperaBrowser 12.16 or earlier, be sure to place an empty file called Opera6.ini in the place where the UrlFilter will be, because Spybot looks for this file when determining what to immunize; this was once used by OperaBrowser to store its preferences, but now a different file is used, yet Spybot was last updated so long ago that it doesn't know this.

Next, read the InternetExplorer article; then, up to once per week, preferably on Wednesday mornings after Kolla releases his updates, run the Spybot updater and then run the Immunization tool. Immunize all entries, and then if you are using my special HostsFile, replace it, because it is an optimized version of what Spybot produces.

# Not Recommended #
Do not run Tea Timer from the old Spybot versions, because it hogs system resources and annoys users to no end, for only a marginal benefit.