let logger = null
let store = null

const css_wh = `
.whdesc {
    font-family: Verdana;
}
`

module.exports = {
    title: "DOOM",
    summary: "Play DOOM, Heretic and Hexen in the Unofficial Homestuck Collection.",
    author: "koba (<a href='https://kobacat.com/'>kobacat.com</a>)",

    description: `<p>This mod adds a playable DOOM, Heretic and Hexen to the Unofficial Homestuck Collection, launchable from the home screen.</p>
	
	<ol>
	<li>Doom created by ID Software</li>
	<li>Heretic and Hexen created by Raven Software</li>
	<li>Ported to Flash by Mike using Adobe Alchemy</li>
	</ol>`,

    computed(api){

        logger = api.logger
        store = api.store

        store.set("filetype", store.get("filetype", "swf"))

        computed = { 
            styles: []
        }

        computed.styles.push(
            {body: css_wh}
        )

        return computed
    },
	
	edit(archive) {
            archive.tweaks.modHomeRowItems.push({
                href: "/page/c=[S] DOOM/m=assets%3A%2F%2Fmods%2Fdoom%2Fswf%2Fdoomtriplepack.swf/b=|CONTROLS|<br><br>FORWARD - W<br>BACKWARD - S<br>TURN LEFT AND RIGHT - LEFT AND RIGHT<br>STRAFE LEFT AND RIGHT - A AND D<br>FIRE - CONTROL OR CLICK<br>USE - SPACE<br>RUN - SHIFT<br>INVENTORY LEFT AND RIGHT - [ AND ]<br>INVENTORY USE - ENTER<br>JUMP - Q<br>CLICK AND DRAG TO TURN",
                thumbsrc: "/mods/flashgames/img/doom.png",
                title: '[S] DOOM',
                description: `Now there's a place <mark>more violent</mark> than Earth. Includes Doom, Heretic and Hexen.`
            })
	},

}
