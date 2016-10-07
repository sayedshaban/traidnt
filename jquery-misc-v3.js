function gopostandquote(postid, alertid) {
  $.post('alerts_popup.php', {
    'do': 'gopostandquote',
    'alertid': alertid,
    'securitytoken': SECURITYTOKEN
  }, function (data) {
    window.location.replace('showthread.php?' + SESSIONURL + 'p=' + postid + '#post' + postid);
  });
}
$('.CounctAlerts li').on({
  click: function () {
    var thisId = $(this).attr('id').replace('alerts', '');
    var thiscount = $(this).children('#count').html();
    if ($('#results-alerts-' + thisId).html() == '') {
      $.post('alerts_popup.php', {
        'do': thisId,
        'counts': thiscount,
        'securitytoken': SECURITYTOKEN
      }, function (data) {
        $('#results-alerts-' + thisId).html('<div class="VbmenuPopup">' + data + '</div>');
		$('ins').css('position', 'initial');
        $('iframe').css('position', 'initial');
      });
    }
  },
  mouseover: function () {
    var thisId = $(this).attr('id').replace('alerts', '');
    $('#results-alerts-' + thisId).show();
  },
  mouseout: function () {
    var thisId = $(this).attr('id').replace('alerts', '');
    $('#results-alerts-' + thisId).hide();
  }
});
$('.TitleCat #TrInfoSup').on({
  mouseover: function () {
    var thisId = $(this).children('div');
    $(thisId).show();
  },
  mouseout: function () {
    var thisId = $(this).children('div');
    $(thisId).hide();
  }
});
var numRand = Math.floor(Math.random() * 2);
if (numRand == 1) {
  var trhref = 'https://www.traidnt.com/cloud/offers/start.html';
  var trtitle = 'ÚÑÖ ÅÈÏÃ';
  if (window.matchMedia('(max-width: 728px)').matches)
  {
    var trsrc = 'http://www.traidnt.net/vb/images/traidntcom/start300-250.jpg';
  } else {
    var trsrc = 'http://www.traidnt.net/vb/images/traidntcom/start728-90.jpg';
  }
} else {
  var trhref = 'https://www.traidnt.com/cloud/offers/start.html';
  var trtitle = 'ÚÑÖ ÅÈÏÃ';
  if (window.matchMedia('(max-width: 728px)').matches)
  {
    var trsrc = 'http://www.traidnt.net/vb/images/traidntcom/start300-250_2.jpg';
  } else {
    var trsrc = 'http://www.traidnt.net/vb/images/traidntcom/start728-90_2.jpg';
  }
}
$(document).ready(function () {
  $('#traidnt-Offers').html('<a href="' + trhref + '" target="_blank"><img title="' + trtitle + '" src="' + trsrc + '" alt="' + trtitle + '" /></a>');
});
function load_alert(alert_p, alertid) {
  $('#end').remove();
  $.post('alerts_popup.php', {
    'do': 'alertshow',
    'alertid': alertid,
    'alert_p': alert_p,
    'securitytoken': SECURITYTOKEN
  }, function (data) {
    $('#collapseobj_alert').append(data);
  });
}
