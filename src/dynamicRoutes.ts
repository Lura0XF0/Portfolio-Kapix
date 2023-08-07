import type { RouteRecordRaw } from 'vue-router'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function dynamicPaths (dynamicRoutes: Readonly<RouteRecordRaw[]>, staticRoutes: Readonly<RouteRecordRaw[]>, routes: Readonly<RouteRecordRaw[]>): Promise<string[] | undefined> {
  // override here to handle generation during ssr of your dynamic routes
  return undefined
}

