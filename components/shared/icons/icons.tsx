import React, { ReactNode } from "react";

export const SearchIcon = {
  name: "search" as const,
  viewBox: "0 0 19 18",
  path: (
    <path d="M7.01953 3.05176e-05C8.74344 3.05176e-05 10.3967 0.68485 11.6157 1.90384C12.8347 3.12282 13.5195 4.77612 13.5195 6.50003C13.5195 8.11003 12.9295 9.59003 11.9595 10.73L12.2295 11H13.0195L18.0195 16L16.5195 17.5L11.5195 12.5V11.71L11.2495 11.44C10.1095 12.41 8.62953 13 7.01953 13C5.29562 13 3.64232 12.3152 2.42334 11.0962C1.20435 9.87724 0.519531 8.22394 0.519531 6.50003C0.519531 4.77612 1.20435 3.12282 2.42334 1.90384C3.64232 0.68485 5.29562 3.05176e-05 7.01953 3.05176e-05ZM7.01953 2.00003C4.51953 2.00003 2.51953 4.00003 2.51953 6.50003C2.51953 9.00003 4.51953 11 7.01953 11C9.51953 11 11.5195 9.00003 11.5195 6.50003C11.5195 4.00003 9.51953 2.00003 7.01953 2.00003Z" />
  ),
};

export const MoreIcon = {
  name: "more" as const,
  viewBox: "0 0 24 24",
  path: (
    <path d="M12 20C11.45 20 10.9793 19.8043 10.588 19.413C10.196 19.021 10 18.55 10 18C10 17.45 10.196 16.979 10.588 16.587C10.9793 16.1957 11.45 16 12 16C12.55 16 13.021 16.1957 13.413 16.587C13.8043 16.979 14 17.45 14 18C14 18.55 13.8043 19.021 13.413 19.413C13.021 19.8043 12.55 20 12 20ZM12 14C11.45 14 10.9793 13.804 10.588 13.412C10.196 13.0207 10 12.55 10 12C10 11.45 10.196 10.979 10.588 10.587C10.9793 10.1957 11.45 10 12 10C12.55 10 13.021 10.1957 13.413 10.587C13.8043 10.979 14 11.45 14 12C14 12.55 13.8043 13.0207 13.413 13.412C13.021 13.804 12.55 14 12 14ZM12 8C11.45 8 10.9793 7.804 10.588 7.412C10.196 7.02067 10 6.55 10 6C10 5.45 10.196 4.97933 10.588 4.588C10.9793 4.196 11.45 4 12 4C12.55 4 13.021 4.196 13.413 4.588C13.8043 4.97933 14 5.45 14 6C14 6.55 13.8043 7.02067 13.413 7.412C13.021 7.804 12.55 8 12 8Z" />
  ),
};

export const ShareIcon = {
  name: "share" as const,
  viewBox: "0 0 24 24",
  path: (
    <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C18.7956 8 19.5587 7.68393 20.1213 7.12132C20.6839 6.55871 21 5.79565 21 5C21 4.20435 20.6839 3.44129 20.1213 2.87868C19.5587 2.31607 18.7956 2 18 2C17.2044 2 16.4413 2.31607 15.8787 2.87868C15.3161 3.44129 15 4.20435 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C5.20435 9 4.44129 9.31607 3.87868 9.87868C3.31607 10.4413 3 11.2044 3 12C3 12.7956 3.31607 13.5587 3.87868 14.1213C4.44129 14.6839 5.20435 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91C19.61 21.91 20.92 20.61 20.92 19C20.92 18.2256 20.6124 17.4829 20.0648 16.9352C19.5171 16.3876 18.7744 16.08 18 16.08V16.08Z" />
  ),
};

export type IconNames =
  | typeof SearchIcon["name"]
  | typeof MoreIcon["name"]
  | typeof ShareIcon["name"];

export interface IconModel {
  name: IconNames;
  viewBox: string;
  path: ReactNode;
}

export const allIcons = [SearchIcon, MoreIcon, ShareIcon];
