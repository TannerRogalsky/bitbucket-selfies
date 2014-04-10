(function() {
  var config = {
      insertBefore : ['.new-comment .aui-button-primary'],
      bodySelector : '#id_new_comment',
      buttonHTML   : (
        '<div class="selfieButtonContainer">' +
          '<button id="totallyAwesomeSelfieButton" type="button" class="aui-button">' +
            '<span class="aui-icon aui-icon-small aui-iconfont-view"></span> ' +
            'Selfie!' +
          '</button>' +
        '</div>'
      )
    }
    , client = new GitHubSelfies(config);
  client.setupSelfieStream();
})();
