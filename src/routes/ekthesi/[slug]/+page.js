import { error } from '@sveltejs/kit';
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    // Wait for the data to be loaded
    
    return {slug:params.slug}};
//     console.log(t);

//     const names = t.filter(x => x.sheetName === "names");

//     console.log(names);

//     let d = [];
//     const find = '/' + params.slug;
//     let sh = names.filter(x => x.url === find);

//     let sname = '';
//     if (sh.length > 0) {
//         sname = sh[0].sheet_name; // Assuming that sh[0] has the property sheet_name
//     }

//     if (sname !== '') {
//         const a = t.filter(x => x.sheetName === sname);
//         if (a.length > 0) {
//             d = a[0].data; // Assuming that a[0] has the property data
//         }
//     }

//     console.log(d);

//     if (d.length > 0) {
//         return { props: { data: d } };
//     } else {
//         throw error(404, 'Not found');
//     }
// }
