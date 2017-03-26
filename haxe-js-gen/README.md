Based off: https://github.com/kevinresol/hxgenjs/tree/master/src/genjs


TODO 

- QUESTION: `-js dummy.js`, Haxe expecs this, is there a way toa void this in a multi-file setup?
- TODO: Create a :ESREquire metatag, read it in the class generator to add the custom ES6 imports
- TODO: For Ember, each Haxe class should then be exported by default
- TODO: For Ember components, the class syntax generated is different. Probably an EmberClass metatag?
- TODO: For ember, js output files should be lowercase
- DOUBT: Different hxapp tree for Haxe files? Unless Ember conflicts with hx+js files sitting side by side
- BUG: Circular dependency issue when a class imports another class and this imported class has the previous class as a superclass (SOLVED)
  This happened with thx.Error and thx.ErrorWrapper. For some reason, thx.Error imports thx.ErrorWrapper, and thx.ErrorWrapper inherits from thx.Error.
  At the Haxe level it's all good, but at the js module level, thx.Error was trying to `require` thx.ErrorWrapper, which then tried to `require` thx.Error
  which *did not complete loading yet at that point*. The fix is here: ember-haxe/haxe-js-gen/genjs/generator/RequireGenerator.hx#38.

Notes:
- FLexibility: Bulk of the app in Haxe, but deviate where necessary (Pure ES6 or even TS)
