import { Meteor } from 'meteor/meteor';
import { Catcher } from 'meteor/marvin:imsi-catcher-catcher';

Meteor.publish("catcher.secrets.detections", function(secret) {
  check(secret, String);

  if(secret === Meteor.settings.CATCHER_ADMIN_KEY) {
    return [
      Catcher.Detections.find({}),
      // GSMReadings.find({"commonReading.deviceId": deviceId})
    ]
  } else {
    this.ready();
  }

});
