// https://www.npmjs.com/package/plop

function withModifier(regExp, errorMessage) {
  const validator = (input) => {
    const result = this(input)
    if (result === false || typeof result === 'string') return result
    return regExp.test(input) || errorMessage
  }
  return Object.assign(validator, { with: withModifier })
}

const testName = (input) => /^([a-z]|([a-z]+\-?)+[a-z])$/.test(input) || 'kebab-case is required'
testName.with = withModifier

/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */
module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'React component module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name of the component module',
        validate: testName,
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/lib/{{name}}',
        base: 'templates/component',
        templateFiles: 'templates/component/*.hbs',
      },
    ],
  })

  plop.setGenerator('hook', {
    description: 'React hook module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name of the hook module',
        validate: testName.with(/^use-/, 'should start with "use-"'),
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/lib/{{name}}',
        base: 'templates/hook',
        templateFiles: 'templates/hook/*.hbs',
      },
    ],
  })

  plop.setGenerator('function', {
    description: 'simply, the function',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name of the function module',
        validate: testName,
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/lib/{{name}}',
        base: 'templates/function',
        templateFiles: 'templates/function/*.hbs',
      },
    ],
  })

  plop.setGenerator('variable', {
    description: 'simpler, then the function',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name of the variable module',
        validate: testName,
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/lib/{{name}}',
        base: 'templates/variable',
        templateFiles: 'templates/variable/*.hbs',
      },
    ],
  })
}
