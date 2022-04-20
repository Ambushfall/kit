//Menu: Share Script as scriptkit.com link
//Description: Create a gist and share from ScriptKit
import { Octokit } from "@johnlindquist/kit-internal/scriptkit-octokit"

let { filePath, command } = await selectScript(
  `Share which script?`
)

div(md(`### Creating Gist...`))
setLoading(true)

let octokit = new Octokit({
  auth: {
    scopes: ["gist"],
    env: "GITHUB_TOKEN_SCRIPT_KIT_GIST",
  },
})

let fileBasename = path.basename(filePath)
setDescription(`Creating link...`)

let response = await octokit.rest.gists.create({
  files: {
    [fileBasename]: {
      content: await readFile(filePath, "utf8"),
    },
  },
  public: true,
})

let link = `https://scriptkit.com/api/new?name=${command}&url=${response.data.files[fileBasename].raw_url}`
copy(link)

let message = `Copied share link to clipboard`

await div(
  md(`### ${message}

[${link}](${link})
`)
)

export {}
