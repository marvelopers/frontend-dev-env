module.exports = function myBabelPlugin() {
  return {
    VariableDeclaration(path) {
      console.log('variableDeclaration() kind:', paht.node.kind);

      if (path.node.kind === 'const') {
        path.node.kind = 'var'
      }
    }
  }
}