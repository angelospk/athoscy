import { writable } from 'svelte/store';
export const selected=writable([]);
export const csvDataStore = writable([]);
export const tabPage=writable(0);
export const lang=writable("en");