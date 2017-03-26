WARNING: As of this writing, this is a total mess and only a playground. Eventually it will evolve into a skeleton for Ember/Haxe awesomeness, and this warning will be removed. Right now
I don't even recommend you look at it.

The goal is to generate Ember2/EmberCLI-friendly JavaScript with Haxe, and make it as painless as possible to use Haxe to create Ember-style classes.

This can't be done without a custom JavaScript generator, because 1) By default Haxe compiles everything to a single js file, this is not compatible with the way Ember-CLI works and
2) Ember-CLI expects ES6-style import/exports, and HaxeJS does not support it out-of-the-box.

Workflow
---

The goal is to NOT change the workflow that much from what EmberCLI expects, we don't want to hack our way (too much) into Ember, since we also want to be as close to the community standards
as possible, while taking advantage of the Haxe compiler and libraries. We also want to have the flexibility of using plain ES6 if/when necessary and take full advantage of the EmberCLI assets
pipeline.

I see two approaches here: 1) Haxe classes and the output js sit side-by-side 2) We have two trees, a apphx that mirrors the final app output. Still thinking what would be the best approach.

See also the README for the custom js generator, with more specific TODO items, [here](haxe-js-gen/README.md)

If you happen to stumble upon this mess now and have any ideas, feel free to contact me!
