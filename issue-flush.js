if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return Session.get("test");
  };

  Template.hello.events({
    'click input' : function () {
        Session.set("test", "Works correctly!");
        // Let's render everything now
        Deps.flush();
        // Block for 30 seconds
        for (var i = new Date().valueOf(); new Date().valueOf() < i + 30 * 1000;) {
        }
        Session.set("test", "Doesn't work correctly?");
    }
  });
  Meteor.startup(function () {
    Session.set("test", "Here you should see for 30 seconds after pressing a button a string saying that it works correctly.");
  });
}
