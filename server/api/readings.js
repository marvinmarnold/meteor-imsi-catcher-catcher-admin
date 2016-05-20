import { Meteor } from 'meteor/meteor';
import { Catcher } from 'meteor/marvin:imsi-catcher-catcher';

Meteor.publish("catcher.secrets.readings", function(secret) {
  check(secret, String);

  if(secret === Meteor.settings.CATCHER_SECRETS_KEY) {
    return [
      Catcher.SIMReadings.find({}),
      // GSMReadings.find({"commonReading.deviceId": deviceId})
    ]
  } else {
    this.ready();
  }

});

if(Catcher.SIMReadings.find().count() === 0) {
  Catcher.SIMReadings.insert({
    commonReading: {
      readingType: Catcher.READING_TYPES.ANDROID_V1_SIM,
      deviceId: "fromFixture",
      deviceScannerId: 1,
      arfcn: 1,
      frequency: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    mcc: 1,
    mnc: 1,
    carrierName: "Test Carrier",
    countryCode: "TTT"
  });
}
