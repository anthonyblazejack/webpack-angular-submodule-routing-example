module.exports = function(angularModule) {
    angularModule.component('submodule1component1', {
        template: '<h1>Submodule 1 Component 1</h1>' +
            '<ul>' +
            '<li><a ui-sref="home">Home</a></li>' +
            '</ul>',
        controller: function() {
            console.log('Submodule 1 Component 1');
        }
    });
};