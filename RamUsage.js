const os = require('os');

setInterval(() => {
    const { platform, totalmem, freemem, arch } = os;

    const totalRAM = totalmem() / 1024 /1024;
    const freeRAM = freemem() / 1024 /1024;
    const usage = ((totalRAM - freeRAM) / totalRAM) * 100;

    const stats = {
        platform: platform(),
        arch: arch(),
        totalmem: `${parseInt(totalRAM)} Mb`,
        freemem: `${parseInt(freeRAM)} Mb`,
        usage: `${usage.toFixed(2)} %`
    };

    exports.module = stats;
    console.clear();
    console.table(stats);}, 1000
    
    );

