$(document).ready(function() {
  var TILESIZE = 60;
  var CONVEYOR_LEFT = '\u25C0';
  var CONVEYOR_RIGHT = '\u25B6';
  var CONVEYOR_UP = '\u25B2';
  var CONVEYOR_DOWN = '\u25BC';
  var ROTATE_CW = '\u21BB';
  var ROTATE_CCW = '\u21BA';
  var ROBOT_COLORS = ['red', 'blue', 'green', 'yellow'];

  function rot(direction) {
    switch(direction) {
      case 'NORTH':
        return 0;
      case 'EAST':
        return 90;
      case 'SOUTH':
        return 180;
      case 'WEST':
        return 270;
    }
    return 0;
  }

  function trans(x, y, direction) {
    return 'T' + (x * TILESIZE) + ' ' + (y * TILESIZE) + ' r' + rot(direction) + ' ' + (TILESIZE / 2) + ' ' + (TILESIZE / 2)
  }

  function conveyor(s, x, y, direction) {
    return s.polygon(
      0, TILESIZE,
      TILESIZE / 2, TILESIZE / 2,
      TILESIZE, TILESIZE,
      TILESIZE, TILESIZE / 2,
      TILESIZE / 2, 0,
      0, TILESIZE / 2
    ).attr({
      fill: '#8e2',
      transform: trans(x, y, direction)
    });
  }

  function robot(s, spec) {
    var armLeft = s.rect(0, 3 * TILESIZE / 10, 2 * TILESIZE / 10, 4 * TILESIZE / 10)
    var armRight = s.rect(8 * TILESIZE / 10, 3 * TILESIZE / 10, 2 * TILESIZE / 10, 4 * TILESIZE / 10)
    var body = s.rect(TILESIZE / 10, 2 * TILESIZE / 10, 8 * TILESIZE / 10, 6 * TILESIZE / 10);
    var head = s.rect(3 * TILESIZE / 10, 3 * TILESIZE / 10, 4 * TILESIZE / 10, 4 * TILESIZE / 10);
    var arrow = s.polygon(
      2 * TILESIZE / 10, 7 * TILESIZE / 10,
      8 * TILESIZE / 10, 7 * TILESIZE / 10,
      TILESIZE / 2, 2 * TILESIZE / 10
    ).attr('fill', spec.color);

    var robo = s.group(armLeft, armRight, body, head);
    robo.attr({
      fill: '#555',
      stroke: '#000'
    });
    return s.group(robo, arrow).attr({
      transform: trans(spec.x, spec.y, spec.direction)
    });
  }

  $('svg.example').each(function() {
    var gridStr = $(this).attr('x-grid');
    var grid = gridStr.split(' ').map(function(row) {
      return row.split(',');
    });

    var height = grid.length;
    var width = grid[0].length;

    $(this).attr('width', width * TILESIZE);
    $(this).attr('height', height * TILESIZE);

    var robots = [];
    for (var i = 1; i <= 4; i++) {
      var robotStr = $(this).attr('x-robot-' + i);
      if (robotStr) {
        var robotParts = robotStr.split(' ');
        var robotInitial = robotParts.shift().split(',');
        robots.push({
          x: parseInt(robotInitial[0]),
          y: parseInt(robotInitial[1]),
          direction: robotInitial[2],
          color: ROBOT_COLORS[i - 1],
          moves: robotParts.map(function(move) {
            var parts = move.split(',');
            var x = parseInt(parts[0]);
            var y = parseInt(parts[1]);
            var direction = parts[2];
            return trans(x, y, direction);
          }),
          move: -1,
          step: function(avatar) {
            this.move++;
            var self = this;
            if (this.move >= this.moves.length) {
              this.move = -1;
              setTimeout(function() {
                avatar.attr({transform: trans(self.x, self.y, self.direction)});
                self.step(avatar);
              }, 2000);
            } else {
              avatar.animate({transform: this.moves[this.move]}, 1000, function() { self.step(avatar); });
            }
          }
        });
      }
    }

    var s = Snap(this);

    for (var x = 0; x < width; x++) {
      for (var y = 0; y < height; y++) {
        var tile = s.rect(x * TILESIZE, y * TILESIZE, TILESIZE, TILESIZE);
        var odd = (x + y) % 2;
        tile.attr('fill', odd ? '#aaa' : '#ccc');

        var tileSpec = grid[y][x];
        console.log('tileSpec', tileSpec, CONVEYOR_LEFT);
        switch(tileSpec) {
          case CONVEYOR_UP:
            conveyor(s, x, y, 'NORTH');
            break;
          case CONVEYOR_RIGHT:
            conveyor(s, x, y, 'EAST');
            break;
          case CONVEYOR_DOWN:
            conveyor(s, x, y, 'SOUTH');
            break;
          case CONVEYOR_LEFT:
            conveyor(s, x, y, 'WEST');
            break;
        }
      }
    }

    robots.forEach(function(r) {
      console.log(r);
      var robo = robot(s, r);
      r.step(robo);
    });
  });
});