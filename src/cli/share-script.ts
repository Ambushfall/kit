//Menu: Share Script as Gist
//Description: Create a gist from the selected script

import { Octokit } from "@johnlindquist/kit-internal/scriptkit-octokit"

let { filePath, command } = await selectScript(
  `Share which script?`
)

let octokit = new Octokit({
  auth: {
    scopes: ["gist"],
    env: "GITHUB_TOKEN_SCRIPT_KIT_GIST",
  },
})

setDescription(`Creating gist...`)

let response = await octokit.rest.gists.create({
  files: {
    [command + ".js"]: {
      content: await readFile(filePath, "utf8"),
    },
  },
  public: true,
})

copy(
  response.data.files[command + path.extname(filePath)]
    .raw_url
)

notify(`Copied raw gist url to clipboard`)

export {}
