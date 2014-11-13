(function (global) {

    var MineSweeper;
    MineSweeper = (function () {

        var tiles = {
            original: 'img/tile.ico',
            redMine: 'img/mine.ico',
            flag: 'img/flag.ico',
            question: 'img/tile2.ico',
            none: 'img/mine4.ico'
        };

        function MineSweeper(config) {
            /**
             * set options
             */
            if (config !== undefined) {
                for (var attrName in config) {
                    this.options[attrName] = config[attrName];
                }
            }
            /**
             * set container of the table
             */
            if (this.options.containerId === undefined || this.options.containerId.trim().length === 0) {
                var containerDiv = document.createElement("div");
                containerDiv.setAttribute("id", "containerMineSweeper");
                this.container = containerDiv;
                document.body.appendChild(containerDiv);
            } else {
                this.container = document.getElementById(this.options.containerId);
            }
        }

        MineSweeper.prototype.options = {
            columns: 10,
            lines: 10,
            containerId: undefined
        };

        function Cell(node, parentTable) {
            this.node = node;
            this.parentTable = parentTable;
            this.node.setAttribute("class", "minesweeper-cell");
            this.setBackground(tiles.original);
            var self = this;
            this.node.addEventListener("contextmenu", function (e) {
                e.preventDefault();
                self.rightClick();
            });
            this.node.addEventListener("click", function (e) {
                e.preventDefault();
                self.leftClick();
            });
        }

        Cell.prototype.setBackground = function (pic) {
            if (pic !== undefined) {
                this.node.style.background = "url('" + pic + "') no-repeat";//background: url('../img/tile.ico') no-repeat;
                this.node.style.backgroundSize = "95%";
            } else {
                this.node.style.background = "";
            }
        };

        Cell.prototype.hiddenValue = "";
        Cell.prototype.visibleValue = undefined;

        Cell.prototype.rightClick = function () {
            if (this.visibleValue === undefined) {
                this.setBackground(tiles.flag);
                this.visibleValue = "flag";
            } else if (this.visibleValue === "flag") {
                this.setBackground(tiles.question);
                this.visibleValue = "question";
            } else {
                this.setBackground(tiles.original);
                this.visibleValue = undefined;
            }
        };

        Cell.prototype.leftClick = function () {
            if (this.hiddenValue === "bomb") {
                this.setBackground(tiles.redMine);
            } else {
                this.setBackground();
            }
        };

        MineSweeper.prototype.foo = function () {
            console.log('ceva');
        };

        function buildTable(rows, columns) {
            var table = document.createElement("table");
            var grid = [];
            for (var lineIndex = 0; lineIndex < rows; lineIndex++) {
                var row = document.createElement("tr");
                table.appendChild(row);
                grid[lineIndex] = [];
                for (var columnIndex = 0; columnIndex < columns; columnIndex++) {
                    var tableCell = document.createElement("td");
                    tableCell.setAttribute("id", "mine-" + lineIndex + "-" + columnIndex);
                    row.appendChild(tableCell);
                    grid[lineIndex][columnIndex] = new Cell(tableCell, grid);
                }
            }

            return table;
        }


        MineSweeper.prototype.build = function () {
            console.log("init");
            var table = buildTable(this.options.lines, this.options.columns);
            this.container.appendChild(table);
        };

        return MineSweeper;
    })();

    if (typeof MINESWEEPER === "undefined") {
        global.MINESWEEPER = MineSweeper;
    }

}(window));
var config = {
    containerId: "container"
};
var mine = new MINESWEEPER(config);
mine.build();

