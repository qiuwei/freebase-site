/*
 * Copyright 2012, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
;(function($, kbs) {

  var propbox = window.propbox = {

    init: function(context, options) {
      options = $.extend({lang:"/lang/en"}, options);
      if (!options.base_ajax_url) {
        throw new Error("base_ajax_url required in propbox options");
      }
      if (!options.base_static_url) {
        throw new Error("base_static_url required in propbox options");
      }
      if (!options.id) {
        throw new Error("topic id required in propbox options");
      }
      if (!options.lang) {
        throw new Error("lang required in propbox options");
      }
      propbox.options = options;

      propbox.kbs = new kbs(context);

      // set current kbs element to the first visible kbs class
      propbox.kbs.set_next(propbox.kbs.get_current(), $(".kbs:visible:first", context, true));

      $(".kbs", context)
        .live("click", function() {
           // set current on click
           var current = propbox.kbs.get_current();
           propbox.kbs.set_next(current, $(this), true);
        })
        .live("edit", function() {
          var submenu = $(this).find(".headmenu:first").data("submenu");
          if (submenu) {
            $("li:first a:first", submenu).click();
          }
        });

      propbox.init_menus(context);
    },

    init_menus: function(context, nicemenu) {
      context = $(context || document);
      if (nicemenu) {
        $(".nicemenu", context).nicemenu();
      }
      var row;
      if (context && context.is(".data-row")) {
        row = context;
      }
      else {
        row = $(".data-row", context);
      }
      row.hover(propbox.row_menu_hoverover, propbox.row_menu_hoverout);
      $(".nicemenu .headmenu", context)
        .add($(".nicemenu .default-action", context))
        .click("click", function() {
          if (propbox.kbs) {
            var current = propbox.kbs.get_current();
            if (current) {
              propbox.kbs.set_next(current, $(this).parents(".kbs:first"), true);
            }
          }
          return false;
        });
    },

    // show row menu button on hover
    row_menu_hoverover: function(e) {
      var row = $(this);
      propbox.row_menu_hoverover.timeout = setTimeout(function() {
        row.addClass("row-hover");
      }, 300);
    },

    // hide row menu button on mouseout
    row_menu_hoverout: function(e) {
      clearTimeout(propbox.row_menu_hoverover.timeout);
      var row = $(this);
      row.removeClass("row-hover");
    },

    /**
     * simple dynamic javascript loader which caches the script_url,
     * so that it does not do multiple gets and executions.
     */
    get_script: function(script_url, callback) {
      var cache = propbox.get_script.cache;
      if (!cache) {
        cache = propbox.get_script.cache = {};
      }
      // check_cache
      var cached = cache[script_url];
      if (cached) {
        if (cached.state === 1) {  // requesting
          // add to the list of callbacks
          cached.callbacks.push(callback);
        }
        else if (cached.state === 4) { // already loaded
          // immediately callback
          callback();
        }
      }
      else {
        // not yet requested
        cached = cache[script_url] = {
          state: 0, // initialized
          callbacks: [callback]
        };
        $.ajax({
          url: propbox.options.base_static_url + script_url,
          dataType: 'script',
          beforeSend: function() {
            cached.state = 1;
          },
          success: function() {
            cached.state = 4;
            $.each(cached.callbacks, function(i,callback) {
              callback();
            });
          },
          error: function() {
            // TODO: handle error
            cached.state = -1;
          }
        });
      }
    },

    prop_edit: function(context, unique) {
      var prop = $(context).parents(".submenu").data("headmenu").parents(".property-section");
      var value_menu = prop.find(".data-section .data-row:first:visible .nicemenu:first .headmenu:first a");
      if (value_menu.length) {
        value_menu.click();
      }
      else {
        propbox.prop_add(context, unique);
      }
      return false;
    },

    prop_add: function(context, unique) {
      var prop_section = $(context).parents(".submenu").data("headmenu").parents(".property-section");
      propbox.get_script("/propbox-edit.mf.js", function() {
        propbox.edit.prop_add_begin(prop_section, unique);
      });
      return false;
    },

    value_edit: function(context) {
      var prop_row = $(context).parents(".submenu").data("headmenu").parents(".data-row:first");
      var prop_section = prop_row.parents(".property-section");
      propbox.get_script("/propbox-edit.mf.js", function() {
        propbox.edit.value_edit_begin(prop_section, prop_row);
      });
      return false;
    },

    value_delete: function(context) {
      var prop_row = $(context).parents(".submenu").data("headmenu").parents(".data-row:first");
      var prop_section = prop_row.parents(".property-section");
      propbox.get_script("/propbox-edit.mf.js", function() {
        propbox.edit.value_delete_begin(prop_section, prop_row);
      });
      return false;
    },

    close_message: function(trigger) {
      $(trigger).parents(".row-msg:first").remove();
      return false;
    }

  };

})(jQuery, window.kbs);