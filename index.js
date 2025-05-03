#!/usr/bin/env node

import { execSync } from 'child_process'
import degit from 'degit'
import { existsSync } from 'fs'
import prompts from 'prompts'

const templates = {
	'React empty': 'Jez-er/astral-templates/react-empty',
	'React by Jez-er': 'Jez-er/astral-templates/react-jez-er',
}

const response = await prompts([
	{
		type: 'select',
		name: 'template',
		message: 'Choice template',
		choices: Object.keys(templates).map(name => ({ title: name, value: name })),
	},
	{
		type: 'text',
		name: 'dir',
		message: 'Project name',
		initial: 'my-app',
		validate: name =>
			existsSync(name) ? 'This directory is already exist' : true,
	},
])

const repo = templates[response.template]
const emitter = degit(repo, { cache: false, force: true, verbose: true })

console.log(`\n🚀 Coping template "${response.template}"...`)
await emitter.clone(response.dir)

console.log(`\n📦 Dependency installing...`)
execSync(`cd ${response.dir} && npm install`, { stdio: 'inherit' })

console.log(`\n✅ Done!`)
console.log(`\n👉 cd ${response.dir} && npm run dev`)
