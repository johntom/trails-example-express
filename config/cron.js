/**
 * Cron Configuration
 * (app.config.cron)
 *
 * Configure cron tasks
 *
 * @see {@link https://github.com/jaumard/trailpack-cron}
 */

// const Controller = require('trails-controller')
let ct = 0;
module.exports = {

  defaultTimeZone: 'America/New_York', // Default timezone use for tasks
   jobs: {
    myJob: {
       schedule: '*/1 * * * * *',
      onTick: app => {
           ct += 1;
        app.log.info('I am ticking',ct)
          if (ct === 2) {
             app.services.CronService.jobs['myJob'].stop();
       }
      },
      onComplete: app => {
        app.log.info('I am done')
      },
      start: true, // Start task immediately
       timezone: 'America/New_York' // Custom timezone
    }
  }

 }