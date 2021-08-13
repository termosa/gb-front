// https://www.npmjs.com/package/plop

const testKebabCase = input => /^([a-z]|([a-z]+\-?)+[a-z])$/.test(input) || 'kebab-case is required'

/**
 * 
 * @param {import('plop').NodePlopAPI} plop
 */
module.exports = plop => {
  plop.setGenerator('component', {
    description: 'React component module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name of the component module',
        validate: testKebabCase
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

  plop.setGenerator('function', {
    description: 'simply, the function',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name of the function module',
        validate: testKebabCase
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
        validate: testKebabCase
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
