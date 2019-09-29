/**
 *	jQuery Plugin for simple vertical scrolling - horizontal movement parallax effect
 *	I wrote this plugin for a project we have done.
 *
 *	License:
 *	The MIT License (MIT)
 *
 *   Copyright (c) 2013 pixxelfactory
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *   THE SOFTWARE.
 **/
(function($) {
  $.jScroll = function(bg_sel, scroll_sel, longest_width) {
    // console.log("longest width: " + longest);

    var elements = [];
    // Extract all selected elements from dom and save them into an array
    $.each(bg_sel, function(i, val) {
      $(val).each(function(e) {
        var tmp = {
          width: $(this).width(),
          height: $(this).height(),
          el: $(this)
        }

        elements.push(tmp);
      });
    });

    // Listen for the actual scroll event
    $(scroll_sel).on('scroll resize', function(e) {
      var currX = $(this).scrollLeft();
      var winWidth = $(this).width();

      // do the position calculation for each element
      $.each(elements, function(i, el) {
        var scrollPercent = (currX / longest_width).toFixed(4);
        var pos = (el.width - winWidth) * scrollPercent * -1;
        // console.log("[" + $(el.el).attr('class') + "] scrollPercent: " + scrollPercent);
        el.el.css('left', pos);
      });
    });
  };
}(jQuery));
