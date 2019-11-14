import { sendEmail } from './controllers/email'
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

process.on('bootstrap-module-route' as any, (app, routes) => {
  /*
   * koa application에 routes 를 추가할 수 있다.
   *
   * ex) routes.get('/path', async(context, next) => {})
   * ex) routes.post('/path', async(context, next) => {})
   */

  routes.get(`/${SEND_EMAIL_PATH}`, async (context, next) => {
    try {
      var sendEmailInfo = await sendEmail({
        receiver: 'moosung.gil@hatiolab.com',
        subject: 'test!',
        content: `<div>테스트입니다.</div>`
      })

      context.status = 200
      context.body = 'OK'
    } catch (e) {
      context.status = 400
      context.body = {
        ...e
      }
    }
  })
})
