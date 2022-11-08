// Name: Sponsors Only
// Description: Requires a GitHub Sponsorship

import { backToMainShortcut } from "../core/utils.js"

let sponsorUrl = `https://github.com/sponsors/johnlindquist/sponsorships?sponsor=johnlindquist&tier_id=235205`

let featureName = await arg("Feature Name")

let content = `# ${featureName} Requires Pro Account

## A Script Kit Pro Sponsorship is Required for ${featureName}

Please go to [https://github.com/sponsors/johnlindquist](${sponsorUrl}) to become a sponsor to unlock this feature.
`
await div({
  html: md(content),
  enter: "Continue to Sponsorship Page",
  shortcuts: [backToMainShortcut],
})

open(`https://github.com/sponsors/johnlindquist`)

export {}
