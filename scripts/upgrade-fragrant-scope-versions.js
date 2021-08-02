const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const package = require('../package.json')

const dependencies = Object.entries(package.dependencies).filter(([dep]) => dep.startsWith('@fragrantjewels'))
console.log(`Found ${dependencies.length} dependencies`)

let packageHasChanges = false

dependencies.forEach(([dep, ver]) => {
  const [dir, name] = dep.split('.').slice(1)
  const packageVersion = ver.match(/[\d\.]+/)[0]
  const currentVersion = execSync(`npm show ${dep} version`).toString().trim()
  if (packageVersion !== currentVersion) {
    console.log(`🔥 ${dir}/${name}@${packageVersion} need to be upgraded to ${currentVersion}`)
    packageHasChanges = true
    package.dependencies[dep] = package.dependencies[dep].replace(packageVersion, currentVersion)
  } else {
    console.log(`👌 ${dir}/${name}@${packageVersion} is up to date`)
  }
})

if (packageHasChanges) {
  fs.writeFileSync(path.resolve(__dirname, '../package.json'), JSON.stringify(package, null, 2) + '\n')
}