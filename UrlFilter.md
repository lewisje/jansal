_Now that the OperaBrowser is based on the Blink engine that powers GoogleChrome, this is deprecated._

# Introduction #
In 2006, Opera introduced in version 9 of its browser a URL Filter File for use in Kiosk Mode, when OperaBrowser would be set full-screen and used in kiosks where not all websites would be desirable; then SpyBot and later [Fanboy](https://secure.fanboy.co.nz/) would see its utility as a content-blocker for ordinary users.

# Details #
Much like AdBlock lists, urlfilter.ini supports wildcards (like `*` and ?), but it does not support whitelisting, regular expressions, behavior options, or ElementHiding syntax; also it is case-sensitive, unlike AdBlock lists (unless [$match-case is used](https://adblockplus.org/en/filters#options) at the end of each filter).

Fanboy has provided a great service by maintaining filter lists for OperaBrowser; nobody else is quite so dedicated to this.

# Recommendations #
If you use Windows and do not want to just download [my URL Filter file](https://jansal.googlecode.com/svn/trunk/adblock/urlfilter.ini), download [this Javascript](https://jansal.googlecode.com/svn/trunk/adblock/urlfilter.js) file instead and double-click to get a compilation of Fanboy's lists and the lists from Malware Domains, Malware Patrol, and the Rickroll Blacklist; then run it through the SpyBot immunizations (I recommend doing this every Wednesday when new immunizations are released), slap a $match-case at the end of each filter, run that through the [useless-filter finder](https://adblockplus.org/en/redundancy_check), take off all those $match-case endings, and finally clear out the blank lines and re-attach those header lines necessary to make the whole thing work; this should make your URL Filter as lean as possible and also responsive to the many times when Fanboy removes filters because of FalsePositives.

# Not Recommended #
Don't use any of the other URL Filter files that you may find on the Web, whether alone or in combination with mine: They are over-broad and prone to nasty FalsePositives.