function showMyVideos(data) {
  var feed = data.feed;
  var entries = feed.entry || [];
  var html = ['<ul style="list-style-type: none">'];
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    var title = entry.title.$t;
    var vid = entry.id.$t.substr(42,53);
    html.push('<li onclick=changethisshit("',vid,'")>', title, '</li>');
  }
  html.push('</ul>');
  document.getElementById('videos').innerHTML = html.join('');
}