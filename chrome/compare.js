(function() {
  var config = {
      insertBefore : ['#submitPrButton'],
      bodySelector : '#id_description',
      buttonHTML   : (
        '<div class="selfieButtonContainer">' +
          '<button id="totallyAwesomeSelfieButton" type="button" class="button">' +
            '<span id="totallyAwesomeSelfieIcon" class="octicon octicon-device-camera"></span>' +
            'Selfie!' +
          '</button>' +
        '</div>'
      )
    }
    , client = new GitHubSelfies(config);
  client.setupSelfieStream();
})();
