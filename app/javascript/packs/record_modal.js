export default function() {
  $('#record-modal').modal();
  $('.record-item').click(function(e) {
    if (e.target.tagName === 'A') { return; }
    var $parent = $(e.target).closest('.record-item');
    var title = $parent.find('.record-name').text();
    var artist = $parent.find('.artist-name > a').text();
    var owner = $parent.find('.owner-name > a').text();
    var location = $parent.find('.location-name').text();
    $('#record-title').text(title);
    $('#record-artist').text(artist);
    $('#record-location').text(location);
    $('#record-owner').text(owner);
    $('#record-modal').modal('open');
  });
}