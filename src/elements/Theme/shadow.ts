export const shadows = {
  smooth:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
  lightSmooth: "rgba(0, 0, 0, 0.1) -4px 9px 25px -6px",
} as const;

export type ShadowType = keyof typeof shadows;
