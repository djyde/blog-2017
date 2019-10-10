const pages = require('gh-pages')

pages.publish('public', {
  repo: 'git@git.dev.tencent.com:djyde/djyde.coding.me.git',
  branch: 'master'
}, err => {
  if (err) {
    console.log(err)
  } else {
    console.log('finished')
  }
})