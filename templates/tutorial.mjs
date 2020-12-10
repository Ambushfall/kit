/**
 * Congratulations! 🎉 You made a `{{name}}` script! 🎈
 * You can now run this script with `{{name}}` in your terminal
 */

console.log(`{{USER}} made a {{name}} script!`)

/**
 * First, let's accept an argument and log it out
 * 1. Uncomment the following two lines
 * 2. Run `{{name}}` in your terminal again
 * Note: We use "lazy args". You will be prompted if you don't provide an arg.
 */

// let user = await arg("Type your github username:")
// console.log(user)

/**
 * Second, let's query the github api for your user data with our argument
 * 1. Uncomment the following lines
 * 2. Run `{{name}} {{USER}}` (assuming this is your github username)
 */

// let response = await get(`https://api.github.com/users/${user}`)
// console.log(`Found: ${response.data.name}`)

/**
 * Finally, let's write the data to a file
 * 1. Uncomment the following lines
 * 2. Run `{{name}} {{USER}}` again
 * Note: We also support "lazy env"
 * A prompt will ask for a "CONTENT_PATH" environment variable.
 * Set "CONTENT_PATH" to "~/Downloads" (or a directory of your choosing)
 */

// let template = `${response.data.name} just wrote a script that:
// 1. Takes an argument
// 2. Queries the Github API
// 3. Writes the data to a template
// 4. Writes the template to a file defined in an Environment Variable
// 5. Automatically launched the file in your editor
//
// ${response.data.name} is awesome!!!`
//
// let contentPath = await env("CONTENT_PATH")
// let filePath = path.join(contentPath, user + ".txt")
// await writeFile(filePath, template)
// editor(filePath)

/**
 * Congratulations! You're ready to explore the wonderful world of JavaScript Scripts. 🥳
 * Type "simple" in your terminal to play around with more options.
 * Use "new" to create new scripts from anywhere.
 * Review the included examples by typing "edit" 👀
 */

/**
 * This file was created with the "tutorial" template. Switch to the "default" template without comments by running
 * "simple env" adjusting the following line in your .env:
 * SIMPLE_TEMPLATE=default
 *
 * Happy Scripting! 🤓 - John Lindquist @johnlindquist
 */
