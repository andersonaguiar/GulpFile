(function() {
  console.log(';D');

  var Sidebar = Backbone.Model.extend
  ({
    promptColor: function() {
      var cssColor = prompt('Please enter a CSS color:');
      this.set({
        color: cssColor
      });
    }
  });

  sidebar.on('change:color', function(model, color) {
    $('#sidebar').css({
      background: color
    });
  });

  sidebar.set({
    color: 'white'
  });

  sidebar.promptColor();

})();