# Birthday Evening — GitHub Pages

A small, calm birthday website with:
- dusk countryside scenery
- floating balloons
- animated campfire + sparks
- two polaroid-style photo slots
- one-at-a-time fading birthday messages
- optional slow piano background music
- mobile-friendly layout

## Put it on GitHub Pages

1. Create a new GitHub repository.
2. Upload everything inside this folder.
3. Make sure `index.html` is in the repository root.
4. Go to **Settings → Pages**.
5. Under the build/deployment section, choose **Deploy from a branch**.
6. Choose your main branch and `/ (root)`.
7. Save. GitHub will give you your site URL.

## Add your friend's photos

Replace these files in `assets/`:
- `friend-photo-1.jpg`
- `friend-photo-2.jpg`

Keep the same filenames, or edit the two `<img src="...">` lines in `index.html`.

The photos appear as softly floating polaroids on either side of the birthday message.

## Add the piano

Put a slow, wholesome piano MP3 in:

`assets/birthday-piano.mp3`

The site intentionally waits for the visitor to press **begin the evening**, because browsers commonly block autoplaying audio before a user interaction.

Use an audio file you have permission to use. A short, seamless piano loop works especially well.

## Change the messages

The messages are in `script.js`, inside the `messages` array.

Each array item is one screen of text. The original punctuation was split into separate screens, as requested.

To change the timing:
- `DISPLAY_TIME = 4300` controls how long each message stays readable.
- `FADE_TIME = 1100` controls the fade transition.

All times are milliseconds.

## Personal touches you can change

In `index.html`:
- page title
- little captions underneath the photos
- `For you.` intro text
- `— hanz` signature

In `styles.css`:
- dusk colors
- balloon colors
- photo positions
- message font size
- campfire position

Have fun making it yours. ✦
