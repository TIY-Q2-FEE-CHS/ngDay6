 angular.module('ngDay6App.directives')
 	.directive('helloCard', function() {
 		return {
 			restrict: 'E',
 			scope: {
 				name: '@',
 				image: '@'
 			},
 			templateUrl: 'views/directiveDemo.html',	
 			// remember that the linking function parameters are positional
 			// so you can't change the order.
 			link: function(scope, element, attrs) {
 				element.on('click', function(e) {
 					element.children().addClass('green');
 				});

 				var text = attrs.name;

 				element.find('.boilerplate').append(text);


 			}
 		}
 	})
 