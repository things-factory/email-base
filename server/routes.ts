const SEND_EMAIL_PATH = 'send-email'
process.on('bootstrap-module-history-fallback' as any, (app, fallbackOption) => {
  /*
   * fallback white list를 추가할 수 있다
   *
   * ex)
   * var paths = [
   *   'aaa',
   *   'bbb'
   * ]
   * fallbackOption.whiteList.push(`^\/(${paths.join('|')})($|[/?#])`)
   */
  var paths = [SEND_EMAIL_PATH]
  fallbackOption.whiteList.push(`^\/(${paths.join('|')})($|[/?#])`)
})
