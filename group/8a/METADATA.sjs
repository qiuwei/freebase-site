var METADATA = {
  "mounts": {
    "lib": "//19a.lib.www.tags.svn.freebase-site.googlecode.dev"
  }, 
  "app_version": 8, 
  "app_tag": "8a", 
  "app_key": "group"
};

acre.require(METADATA.mounts.lib + "/loader.sjs").extend_metadata(METADATA);