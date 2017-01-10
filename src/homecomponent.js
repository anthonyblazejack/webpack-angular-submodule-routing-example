module.exports = function(angularModule) {
    angularModule.component('homecomponent', {
        template: '<h1>Home Component</h1>' +
            '<ul>' +
            '<li><a ui-sref="submodule1component1">Submodule 1 Component 1</a></li>' +
            '<li><a ui-sref="submodule1component2">Submodule 1 Component 2</a></li>' +
            '<li><a ui-sref="submodule2component1">Submodule 2 Component 1</a></li>' +
            '<li><a ui-sref="submodule2component2">Submodule 2 Component 2</a></li>' +
            '</ul>',
        controller: function() {
            console.log('Home Component');
        }
    });
};