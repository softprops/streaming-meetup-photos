/* custom behavior */
(function($) {
  $(function() {
      var q = [], slots = 8, delay = 1000, filter = [], wrap = function(photo) {
          var pa = photo.photo_album,
              grp = pa.group,
              evt = pa.event,
              link = ['http://www.meetup.com'
                      , grp.urlname
                      , 'photos'
                      , pa.photo_album_id
                      , photo.photo_id + '/'
                      ].join('/');
          return $(['<li><a href="'
                    , link
                    , '" target="_blank"><img src="'
                    , photo.photo_link
                    , '"/></li>'].join(''));
      }, dq = function() {
        var p = q.shift();
        if(p) {
            var ps = $("#photos"), wrapped = wrap(p);
            wrapped.find("img").load(function() {
                var cnt = ps.children().size();
                if(cnt >= slots) {
                    var i = Math.floor(Math.random() * slots),
                        c = ps.children()[i];
                    $(c).fadeOut(1000, function() {
                        $(this).replaceWith(wrapped);
                        wrapped.fadeIn(500);
                    });
                } else {
                    ps.append(wrapped);
                    wrapped.fadeIn(500);
                }
            });
        }
      };
      mu.Photos(function(p) { q.push(p); }, { since_count: slots });
      setInterval(dq, delay);
  });
})(jQuery);