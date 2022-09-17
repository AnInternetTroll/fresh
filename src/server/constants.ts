import { INTERNAL_PREFIX } from "../runtime/utils.ts";

export const REFRESH_JS_URL = `${INTERNAL_PREFIX}/refresh.js`;
export const ALIVE_URL = `${INTERNAL_PREFIX}/alive`;
let buildIdTmp = crypto.randomUUID();
try {
  buildIdTmp = Deno.env.get("DENO_DEPLOYMENT_ID") || buildIdTmp;
} catch (err) {
  if (!(err instanceof Deno.errors.PermissionDenied)) throw err;
}
export const BUILD_ID = buildIdTmp;
export const JS_PREFIX = `/js`;
let debug = true;
try {
  debug = !Deno.env.get("DENO_DEPLOYMENT_ID");
} catch (err) {
  if (!(err instanceof Deno.errors.PermissionDenied)) throw err;
}
export const DEBUG = debug;

export function bundleAssetUrl(path: string) {
  return `${INTERNAL_PREFIX}${JS_PREFIX}/${BUILD_ID}${path}`;
}

globalThis.__FRSH_BUILD_ID = BUILD_ID;

declare global {
  interface Crypto {
    randomUUID(): string;
  }

  // deno-lint-ignore no-var
  var __FRSH_BUILD_ID: string;
}
