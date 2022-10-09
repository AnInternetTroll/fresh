// -- std --
export {
  extname,
  fromFileUrl,
  toFileUrl,
} from "https://deno.land/std@0.156.0/path/mod.ts";
export { walk } from "https://deno.land/std@0.156.0/fs/walk.ts";
export { serve } from "https://deno.land/std@0.156.0/http/server.ts";
export type {
  ConnInfo,
  Handler as RequestHandler,
  ServeInit,
} from "https://deno.land/std@0.156.0/http/server.ts";
export { Status } from "https://deno.land/std@0.156.0/http/http_status.ts";
export {
  typeByExtension,
} from "https://deno.land/std@0.156.0/media_types/mod.ts";

// -- rutt --
export * as rutt from "https://deno.land/x/rutt@0.0.13/mod.ts";

// -- esbuild --
// @deno-types="https://deno.land/x/esbuild@v0.15.7/mod.d.ts"
import * as esbuildWasm from "https://deno.land/x/esbuild@v0.15.7/wasm.js";
import * as esbuildNative from "https://deno.land/x/esbuild@v0.15.7/mod.js";
// @ts-ignore trust me
const esbuild: typeof esbuildWasm = (Deno.run === undefined ||
    await Deno.permissions.query({ name: "run" }).then((res) =>
      res.state !== "granted"
    ))
  ? esbuildWasm
  : esbuildNative;
export { esbuild, esbuildWasm as esbuildTypes };
export { denoPlugin } from "https://deno.land/x/esbuild_deno_loader@0.6.0/mod.ts";
