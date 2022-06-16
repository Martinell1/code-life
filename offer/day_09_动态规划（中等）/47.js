/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxValue = function(grid) {
    let rows = grid.length, cols = grid[0].length;

    // 第一列的元素只能从上往下移 （得到第一列每个位置的最大值）
    for (let i = 1; i < rows; i++) {
        grid[i][0] += grid[i - 1][0];
    }

    // 第一行的元素只能从左往右移（得到第一行每个位置的最大值）
    for (let i = 1; i < cols; i++) {
        grid[0][i] += grid[0][i - 1];
    }

    // 除去第一行、第一列遍历，每个位置的最大值都为：当前位置的值加（当前位置的上边与左边中的较大值）
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1]) 
        }
    }

    return grid[rows - 1][cols - 1];
};
