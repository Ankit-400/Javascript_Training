import { TIMEOUT_SEC } from "./config";

const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};

export const AJAX = async function (url, uploadData = undefined) {
    try {
        const faecthPro = uploadData ? fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(uploadData),
        }) : fetch(url);

        const res = await Promise.race([faecthPro, timeout(TIMEOUT_SEC)]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message}, ${data.status} 💥`)
        else console.log("Data Fetched or Uploaded..✔");
        return data;
    } catch (err) {
        throw err;      // TO catch error in model
    }
}

// export const getJSON = async function (url) {
//     try {
//         console.log(url);
//         const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
//         const data = await res.json();
//         if (!res.ok) throw new Error(`${data.message}, ${data.status} 💥`)
//         else console.log("Data Fetched..✔");
//         return data;
//     }
//     catch (err) {
//         throw err;      // TO catch error in model
//     }
// };

// export const sendJSON = async function (url, uploadData) {
//     try {
//         const fetchPro = fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(uploadData),
//         });
//         const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
//         const data = await res.json();
//         if (!res.ok) throw new Error(`${data.message}, ${data.status} 💥`)
//         else console.log("Data Fetched..✔");
//         return data;
//     }
//     catch (err) {
//         throw err;      // TO catch error in model
//     }
// }