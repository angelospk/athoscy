// const url="https://docs.google.com/spreadsheets/d/e/2PACX-1vRmh5F6SfUqZdK4wPc8gG36n12Tz1Bg69xSLcG9eZpyke16FoniwDk3ztGGJJNE38RSuaJQ-icX_1AP/pub?gid=113001344&single=true&output=csv"
// /** @type {import('./$types').PageLoad} */
// import { parse } from 'papaparse';

// export async function load({}) {
//     try {
//         const response = await fetch(url);
//         const text = await response.text();
//         const parsedData = parse(text, { header: true }).data;
//         return {data:parsedData};
//     } catch (error) {
//         console.error('Error fetching and parsing CSV:', error);
//         return {data:[]};
//     }
// }