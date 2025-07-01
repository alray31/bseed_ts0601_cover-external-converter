const exposes = require("zigbee-herdsman-converters/lib/exposes");
const tuya = require("zigbee-herdsman-converters/lib/tuya");
const legacy = require("zigbee-herdsman-converters/converters/fromZigbee");

const e = exposes.presets;
const ea = exposes.access;

const definition = {
    fingerprint: tuya.fingerprint("TS0601", ["_TZE200_yenbr4om", "_TZE204_bdblidq3", "_TZE200_bdblidq3", "_TZE284_uqfph8ah"]),
    model: "BSEED_TS0601_cover",
    vendor: "BSEED",
    description: "Zigbee curtain switch",
    fromZigbee: [legacy.fz.tuya_cover],
    toZigbee: [require("zigbee-herdsman-converters/converters/toZigbee").tz.tuya_cover_control],
    exposes: [e.cover_position().setAccess("position", ea.STATE_SET)],
};

module.exports = definition;
