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

acre.require('/test/lib').enable(this);

acre.require("lib/test/mock").playback(this, "queries/test/playback_test_object.json");

var h = acre.require("lib/helper/helpers.sjs");
var queries = acre.require("queries/object.sjs");


test("object", function() {
  var result;
  queries.object("/en/kaede_rukawa")
  .then(function(object) {
      result = object;
  });
  acre.async.wait_on_results();
  ok(result, "Got object result");
  ok(result.mid, "Got object mid");

  ok(result.type_map, "Got type map");
  ok(result.type_map["/base/slamdunk/player"], "Expected /base/slamdunk_player in type map.");

  ok(result.attribution.creator, "Got an attribution with a creator.");
});

test("not found", function() {
  var result, error;
  queries.object("/fu/bar")
    .then(function(object) {
      result = object;
    }, function(e) {
      console.log("e", e);
      error = e;
    });
  acre.async.wait_on_results();
  ok(error, "Error expected for bad topic id");
});

acre.test.report();
