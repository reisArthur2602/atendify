export const tokenUtils = {
  save: (token: string) => localStorage.setItem("access-token", token),
  get: () => localStorage.getItem("access-token") || null,
  destroy: () => localStorage.removeItem("access-token"),
};
