!SLIDE
# Streaming Pictures

<img id="streamer" src="http://photos1.meetupstatic.com/photos/event/4/c/e/c/600_22759692.jpeg" />
<span class="subtle">with the</span> ![Meetup API](http://meetup.github.com/stream/img/meetupapi.png)
!SLIDE

## Hello. My name is Doug.
### I type code @ [meetup.com](http://meetup.com)

!SLIDE

## More specfically,
## the [API](http://meetup.com/api)

    GET /2/member/self HTTP/1.1
    Host: api.meetup.com
    Accept: your/questions

!SLIDE

## Let's GET some photos
![ny-lomo](http://photos2.meetupstatic.com/photos/event/8/5/e/9/600_34054281.jpeg)
!SLIDE

## 1. Grab this
## [bitly.com/meetupjs](bitly.com/meetupjs)

!SLIDE

## 2. Put it in yr head
    <head>
      <script type="text/javascript"
              src="/path/to/jquery.min.js">
      </script>
      <script type="text/javascript"
              src="http://bitly.com/meetupjs">
      </script>
    </head>

!SLIDE

## 3. Turn on the faucet

    <script type="text/javascript">
      mu.Photos(function(photo) {
        // show it
      })
    </script>

!SLIDE

## 3.5. Adjust your nozzle

    <script type="text/javascript">
      var q = [], delay = 1500, dq = function() {
        var photo = q.shift();
        if(photo) { /* show it */ }
      };
      mu.Photos(function(photo) {
        q.push(photo);
      }, {
        since_count: 10
      })
      setInterval(dq, delay);
    </script>

!SLIDE

## Anatomy of a Meetup photo

    {
      "photo_id": 123,
      "caption":"",
      "photo_link":"/path/to/photo",
      "thumb_link":"/path/to/small/version",
      "hires_link": "/path/to/orig/version",
      "member" : { "member_id": 123,
         "name": "doug" },
      ...
    }

!SLIDE

## More meta

    {
      ...
      "photo_album": {
         "event": { "id": 123, "name": "Photo Hack Day" },
         "group": { "id": 123, "name": "...",
            "urlname": "ny-lomography",
            "group_topics": [{
                "topic_name":"",
                "urlkey":""
          }]}
       }
    }

!SLIDE

### More info

[meetup.com/meetup_api/docs/
    stream/2/photos/](http://www.meetup.com/meetup_api/docs/stream/2/photos/)

!SLIDE

## Notes to the streamee

- only *public* Group/Event data
- client-side filtering
- read-only (to write talk to me later)
- workshow template @ [github.com/meetup/streaming-pictures](https://github.com/meetup/streaming-pictures/)
- general example stream code @ [github.com/meetup/stream](https://github.com/meetup/stream)

!SLIDE

    GET /questions
    Host: api.meetup.com
    Accept: answers/*

<ul id="photos"></ul>
<script type="text/javascript" src="http://bitly.com/meetupjs"></script>

!SLIDE

<div id="takeaway">
 Oh, and find<br/>
 something you love<br/>
 and share it<br/>
 with others.<br/>
 <a href="meetup.com">meetup.com</a>/<br/>
 <a href="http://meetup.com/ny-lomographers">ny-lomographers</a>
<br/>&mdash;Thanks
</div>


<img id="lomo" src="http://photos2.meetupstatic.com/photos/event/7/7/1/600_22141905.jpeg"/>