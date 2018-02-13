require("dotenv").config({ path: "dev.env" });

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const vds = require("virtual-device-sdk");

describe("Give Facts End-to-End Test", function() {
    jest.setTimeout(120 * 1000); // 120 second timeout

    test("Give facts", (done) => {
        const virtualDevice = new vds.VirtualDevice(process.env.VIRTUAL_DEVICE_TOKEN);
        virtualDevice.message("open give facts").then((result) => {
            console.log("JSON:\n" + JSON.stringify(result, null, 2));
            console.log("Transcript: " + result.transcript);
            expect(result.transcript).toContain("wants you to tell");
            done();
        });
    });
});