# Building

In this folder, run

```sh
npx babel --watch src --out-dir dist --presets react-app/prod
```

to handle jsx preprocessing.

Serve the files using http-server like `npx http-server` to avoid chrome complaining about CORS problems with file:// paths
