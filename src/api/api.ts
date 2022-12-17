export const apiCall = async <T>(link: string): Promise<T> => {
  const resp = await fetch(link)

  return await resp.json()
}
