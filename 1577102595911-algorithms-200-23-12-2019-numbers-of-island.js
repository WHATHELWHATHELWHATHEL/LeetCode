/**
 * @param {character[][]} grid
 * @return {number}
 */

// const printGrid = (grid) => {
//   grid.forEach((singleLine) => {
//     console.log(singleLine.map(
//       item => `index:${item.index}|parent:${item.parent}`).join(' ')
//     );
//   });
// };

// 版本 1 并查集方案

// // 坐标 （i，j） 在 n * m 的矩阵中映射到对应位置下标的函数
// const createIndexByCoord = (i, j, n) => j * n + i;

// // 使用位置下标获得对应的坐标
// const createCoordByIndex = (i, n) => [i % n, Math.floor(i / n)];

// // union 算法， 多棵树进行合并， 合并到第一棵树上面
// const union = (node1, ...nodes) => {
//   nodes.forEach((singleNode) => {
//     singleNode.parent = node1.index;
//   });
// }

// // find 算法
// const find = (grid, node) => {
//   if (node.parent === node.index) {
//     return node;
//   }
//   const [i, j] = createCoordByIndex(node.parent, grid[0].length);
//   return find(grid, grid[j][i]);
// };

// // 获得一个 node 对应的相邻 node 的，不在同一颗树下的方法
// const getAdjSameValueNodeInDifferentSet = (grid, i, j, width, height) => {
//   const node = grid[j][i];
//   const top = grid[j - 1] ? grid[j - 1][i] : undefined;
//   const bottom = grid[j + 1] ? grid[j + 1][i] : undefined;
//   const left = grid[j][i - 1];
//   const right = grid[j][i + 1];
//   return [top, bottom, left, right].filter(i => i)
//   .filter(i => i.value === node.value)
//   .filter(i => find(grid, i).index !== find(grid, node).index);
// };

// const numIslands = (processedGrid) => {
//   if (processedGrid.length <= 0) {
//     return 0;
//   }

//   const width = processedGrid[0].length;
//   const height = processedGrid.length;

//   // 初始化，把各个位置初始化成对应的结构
//   processedGrid.forEach((singleLine, j) => {
//     singleLine.forEach((value, i) => {
//       processedGrid[j][i] = {
//         value,
//         index: createIndexByCoord(i, j, width),
//         parent: createIndexByCoord(i, j, width),
//       };
//     });
//   });

//   // 之后所有的点挨个过一遍，使用并查集把各个点连接起来
//   processedGrid.forEach((singleLine, j) => {
//     singleLine.forEach((singleNode, i) => {
//       // 获得这个节点的所有临近非同 parent 节点
//       const adjNodes = getAdjSameValueNodeInDifferentSet(
//         processedGrid, i, j, width, height,
//       );
//       // 各个节点合并到一起
//       adjNodes.forEach((singleAdjNode) => {
//         union(singleNode, find(processedGrid, singleAdjNode));
//       });
//     });
//   });

//   // 之后统计各个节点的 parent 的 index
//   // 统计所有 value 是 1 的根 parent，用 set 做结果
//   const resultSet = new Set();
//   processedGrid.forEach((singleLine, j) => {
//     singleLine.forEach((singleNode, i) => {
//       if (singleNode.value === '1') {
//         resultSet.add(find(processedGrid, singleNode));
//       }
//     });
//   });

//   return resultSet.size;
// };

// dfs 解法
// 两个游标 i 和 j，一开始都是 0
// 之后整个图里 dfs， 以这个点为中心，上下左右 4 个方向开始 dfs
// 访问过的节点，值标记成 0，这样之后的 dfs 就不会算了
// 例如如下的数据
// 1 1 1 0
// 1 1 0 0
// 1 0 0 1
// 0 0 1 1
// 第一个节点，进行 dfs 之后，对应的矩阵就变成 0
// 0 0 0 0
// 0 0 0 0
// 0 0 0 1
// 0 0 1 1
// 这样 i 和 j 继续向下游标的时候，遇到 0 的不用做操作跳过去就好
// 整体的访问效率就可以控制在 o(n * m) 了

const dfsGrid = (grid, i, j, width, height) => {
  grid[j][i] = '0';
  if (j + 1 < height && grid[j + 1][i] === '1') {
    dfsGrid(grid, i, j + 1, width, height);
  }
  if (j - 1 >= 0 && grid[j - 1][i] === '1') {
    dfsGrid(grid, i, j - 1, width, height);
  }
  if (i + 1 < width && grid[j][i + 1] === '1') {
     dfsGrid(grid, i + 1, j, width, height);
  }
  if (0 <= i - 1 && grid[j][i - 1] === '1') {
    dfsGrid(grid, i - 1, j, width, height);
  }
};

const numIslands = (grid) => {
  if (grid.length <= 0) {
    return 0;
  }
  let resultCount = 0;
  const width = grid[0].length;
  const height = grid.length;
  for (let j = 0 ;j < height; j += 1) {
    for (let i = 0; i < width; i += 1) {
      if (grid[j][i] === '1') {
        dfsGrid(grid, i, j, width, height);
        resultCount += 1;
      }
    }
  }
  return resultCount;
};

// // test case 1
// console.log(
//   numIslands(
//     [
//       ['1', '1', '0', '0', '0'],
//       ['1', '1', '0', '0', '0'],
//       ['0', '0', '1', '0', '0'],
//       ['0', '0', '0', '1', '1']
//     ]
//   )
// );


// // test case 2
// console.log(
//   numIslands(
//     [
//       ['0', '0', '0', '0'],
//       ['0', '0', '0', '0'],
//       ['0', '0', '0', '0'],
//       ['0', '0', '0', '0'],
//     ]
//   )
// );

// // test case 3
// console.log(
//   numIslands(
//     [
//       ['1', '0', '0', '1'],
//       ['0', '0', '1', '0'],
//       ['0', '1', '0', '0'],
//       ['1', '0', '0', '1'],
//     ]
//   )
// );

// // test case 4
// console.log(
//   numIslands([
//     ['1', '1', '1'],
//     ['0', '1', '0'],
//     ['1', '1', '1'],
//   ])
// );

// // test cse 5
// console.log(
//   numIslands(
//     [
//       ['0', '0', '0', '1'],
//       ['0', '0', '1', '1'],
//       ['0', '1', '1', '1'],
//       ['1', '1', '1', '1'],
//     ]
//   )
// );
