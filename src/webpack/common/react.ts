/*
 * Scorncord, a modification for Discord's desktop app
 * Copyright (c) 2025 Scorncord and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { findByCodeLazy, findByPropsLazy, waitFor } from "@webpack";

export let React: typeof import("react");
export let useState: typeof React.useState;
export let useEffect: typeof React.useEffect;
export let useLayoutEffect: typeof React.useLayoutEffect;
export let useMemo: typeof React.useMemo;
export let useRef: typeof React.useRef;
export let useReducer: typeof React.useReducer;
export let useCallback: typeof React.useCallback;

export const ReactDOM: typeof import("react-dom") = findByPropsLazy("createPortal");
// 299 is an error code used in createRoot and createPortal
export const createRoot: typeof import("react-dom/client").createRoot = findByCodeLazy("(299));", ".onRecoverableError");

waitFor("useState", m => {
    React = m;
    ({ useEffect, useState, useLayoutEffect, useMemo, useRef, useReducer, useCallback } = React);
});
