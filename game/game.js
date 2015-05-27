Game = new Mongo.Collection('game');

var applyMove = {
  forward: function(player) {
    var dx = 0, dy = 0;
    switch(player.rot) {
      case 0: dy =  1; break; // SOUTH
      case 1: dx = -1; break; // WEST
      case 2: dy = -1; break; // NORTH
      case 3: dx =  1; break; // EAST
    }
    player.pos[0] += dx;
    if (player.pos[0] < 0) {
      player.pos[0] = 3;
    } else if (player.pos[0] > 3) {
      player.pos[0] = 0;
    }
    player.pos[1] += dy;
    if (player.pos[1] < 0) {
      player.pos[1] = 3;
    } else if (player.pos[1] > 3) {
      player.pos[1] = 0;
    }
  },
  rotateLeft: function(player) {
    player.rot -= 1;
    if (player.rot < 0) {
      player.rot = 3;
    }
  },
  rotateRight: function(player) {
    player.rot += 1;
    if (player.rot > 3) {
      player.rot = 0;
    }
  }
}

Meteor.methods({
  move: function(side, move) {
    check(side, String);
    check(move, String);
    var game = Game.findOne();
    game[side].moves.push(move);

    if (game.a.moves.length > 0 && game.b.moves.length > 0) {
      var moves = {
        a: game.a.moves.shift(),
        b: game.b.moves.shift()
      };
      applyMove[moves.a](game.a);
      applyMove[moves.b](game.b);
    }

    Game.update(game._id, game);
  }
});

if (Meteor.isClient) {
  Template.game.helpers({
    game: function () {
      return Game.findOne();
    }
  });

  Template.game.events({
    'click .a.forward': function() {
      Meteor.call('move', 'a', 'forward');
    },
    'click .a.rotateLeft': function() {
      Meteor.call('move', 'a', 'rotateLeft');
    },
    'click .a.rotateRight': function() {
      Meteor.call('move', 'a', 'rotateRight');
    },
    'click .b.forward': function() {
      Meteor.call('move', 'b', 'forward');
    },
    'click .b.rotateLeft': function() {
      Meteor.call('move', 'b', 'rotateLeft');
    },
    'click .b.rotateRight': function() {
      Meteor.call('move', 'b', 'rotateRight');
    }
  });

  Template.game.rendered = function() {
    var self = this;
    this.canvas = this.find('#render');
    this.ctx = this.canvas.getContext('2d');

    this.renderGrid = function() {
      for (var x = 0; x < 4; x++) {
        for (var y = 0; y < 4; y++) {
          var even = (x + y) % 2 === 0;
          this.ctx.fillStyle = even ? '#dddddd' : '#bbbbbb';
          this.ctx.fillRect(x * 4, y * 4, 4, 4);
        }
      }
    };

    this.renderPlayer = function(color, player) {
      this.ctx.save();
      this.ctx.translate(player.pos[0] * 4 + 2, player.pos[1] * 4 + 2);
      this.ctx.rotate(player.rot * Math.PI / 2);
      this.ctx.fillStyle = '#000000';
      this.ctx.fillRect(-2, -2, 4, 4);
      this.ctx.fillRect(-3, -1, 6, 2);
      this.ctx.fillStyle = color;
      this.ctx.fillRect(-1, -1, 2, 1);
      this.ctx.restore();
    };

    this.renderGame = function(game) {
      console.log('renderGame', game);
      this.renderPlayer('#ff0000', game.a);
      this.renderPlayer('#9999ff', game.b);
    };

    if (!self.renderGameLoop) {
      console.log('autorun!');
      self.renderGameLoop = Meteor.autorun(function() {
        var game = Game.findOne();
        console.log('autorunning!', game);
        self.renderGrid();
        if (game) {
          self.renderGame(game);
        }

        var icon = $('#favicon');
        console.log('icon', icon);
        var newIcon = icon.clone();
        newIcon.attr('href', self.ctx.canvas.toDataURL());
        icon.replaceWith(newIcon);
      });
    }
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Game.find().count() === 0) {
      Game.insert({
        a: {
          rot: 1,
          pos: [0, 0],
          moves: []
        },
        b: {
          rot: 3,
          pos: [3, 3],
          moves: []
        }
      });
    }
  });
}
