const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function publicAsset(path: string) {
  if (!path.startsWith('/')) {
    return path;
  }

  return `${basePath}${path}`;
}
