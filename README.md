# Daniel Muñoz — Portfolio

A responsive personal portfolio built with plain HTML, CSS and JavaScript. No build tools or frameworks are required.

## Run locally
Open `index.html` in your browser. For a local server, use the Live Server extension in VS Code.

## Add your portrait
1. Add your professional photo to `assets/profile/`.
2. Name it `profile.jpg`.
3. The page will automatically display it in the About section.

## Add project images
Open `script.js` and edit the `projects` array.
For each project, set `cover` to a relative path, for example:

```js
cover: "assets/projects/inside-your-mind/cover.jpg",
```

Create the folder and put the image there. Recommended image ratio: 16:9, JPG or WebP.

## Add audio and video
Put media files in `assets/multimedia/`, then edit the `mediaItems` array in `script.js`.

Audio example:
```js
{
  title: "Sound design demo",
  description: "Sound design and audio editing sample.",
  type: "audio",
  src: "assets/multimedia/sound-design-demo.mp3",
  poster: ""
}
```

Video example:
```js
{
  title: "Animation showreel",
  description: "A short selection of motion and video work.",
  type: "video",
  src: "assets/multimedia/animation-showreel.mp4",
  poster: "assets/multimedia/animation-poster.jpg"
}
```

Keep videos compressed and reasonably short so the portfolio loads quickly. You can also use an embedded YouTube or Vimeo player later if the files are large.

## Update your links
At the bottom of `script.js`, replace the example email, GitHub and LinkedIn URLs in the `personal` object.

Update each project's `link` with its actual GitHub repository, demo or case study URL.

## Update your résumé
Place your final PDF at:
`documents/daniel-munoz-cv.pdf`

Until you add it, the résumé button will point to a file that does not exist.

## Publish with GitHub Pages
1. Create a GitHub repository, for example `daniel-munoz-portfolio`.
2. Upload the contents of this folder to the repository root.
3. Open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.
6. Wait for GitHub Pages to publish your site.

## Before publishing
- Replace the example contact details.
- Add your real portrait.
- Add real project screenshots and links.
- Verify the English level and every listed technology match what you can confidently discuss.
- Add your final CV PDF.

## v2 notes
- Sections: Web, Unity, UI/UX, Audio, Video/3D, Databases. Audio has a highlighted card but is not the lead specialty.
- Edit `projects` and `mediaItems` in `script.js`; edit `personal` at the bottom for email/GitHub/LinkedIn.
- Replace any "Add" placeholders in `assets/` with your own files.
