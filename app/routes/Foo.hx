//import Ember from 'ember';

package app.routes;

import thx.*;

class Foo {
  public function new() {
    var map = new AnonymousMap({ name : "Franco" });
    trace(map.get("name"));
  }
}
//export default Ember.Route.extend({
//  model() {
//      return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
//    }
//});
