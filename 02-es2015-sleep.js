function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms);
    });
}

async function other() {
    console.log('Waiting...');
    await sleep(1000);
    console.log('Done');
}

other()
