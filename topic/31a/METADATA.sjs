var METADATA = {
  "mounts": {
    "site": "//24a.site.www.tags.svn.freebase-site.googlecode.dev"
  }, 
  "app_version": "31", 
  "app_tag": "31a", 
  "app_key": "topic"
};

acre.require(METADATA.mounts.site + "/lib/helper/helpers.sjs").extend_metadata(METADATA, "site");
