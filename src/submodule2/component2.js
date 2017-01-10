module.exports = function(angularModule) {
    angularModule.component('submodule2component2', {
        template: '<h1>Submodule 2 Component 2</h1>' +
            '<ul>' +
            '<li><a ui-sref="home">Home</a></li>' +
            '</ul>',
        controller: function() {
            console.log('Submodule 2 Component 2');
        }
    });
};