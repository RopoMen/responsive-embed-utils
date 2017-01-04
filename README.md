# Responsive embed utils
Set of mixins and build css to support responsive embded iframe or video element.


## Configuration
There are two SASS variables which are used to configure the build css, `$roy-aspect-ratios` and `$roy-responsive-selectors`, these are defined inside `_variables.scss` and those are easily understood. If you override default configuration call `gulp build` to get the css.

#### $roy-aspect-ratios
Configure which aspect ratios you need, by default configuration contains 16:9 and 4:3, but you can add any aspect ratios you need.

#### $roy-responsive-selectors
Configure which elements or selectors should be made "responsive embedded" under `.roy-embed` class.
By default: 
* `video` -element
* `iframe` -element
* `.roy-responsive-item` -css class, added in to element.

Other commonly added elementes are `embed` and `object`, but those are not so often required so those are not added in to default configuration.

## Examples
Check [index.html](test/index.html) to see examples working, just open index.html in browser.

#### Basic setup
```html
<div> <!-- To embed 4:3 aspect ratio, use class 'roy-embed-4by3' -->
	<div class="roy-embed roy-embed-16by9">
		<iframe src="http://www.youtube.com/watch?v=SGtP0YX34pA"></iframe>
	</div>
</div>
```

#### Horizontal centering
If iframe is narrower than containing area it will be centered horizontally.

```html
<div>
	<div class="roy-embed roy-embed-16by9 roy-h-center">
		<iframe src="http://www.youtube.com/watch?v=SGtP0YX34pA"></iframe>
	</div>
</div>
```

#### Vertical centering
If height of containing area is higher than iframe, iframe is centered vertically inside the container.

```html
<div> <!-- This container element should be 'position: relative;' so that vertical centering works -->
	<div class="roy-embed roy-embed-16by9 roy-v-center">
		<iframe src="http://www.youtube.com/watch?v=SGtP0YX34pA"></iframe>
	</div>
</div>
```

#### Centering horizontally and vertically
iframe can be centered in both ways, if both rules above examples match.

```html
<div>
	<div class="roy-embed roy-embed-16by9 roy-h-center roy-v-center">
		<iframe src="http://www.youtube.com/watch?v=SGtP0YX34pA"></iframe>
	</div>
</div>
```

### License
MIT