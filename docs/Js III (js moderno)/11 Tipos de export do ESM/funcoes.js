export function inline() {
  console.log("Export nomeado inline");
}

function group() {
  console.log("Export nomeado não-inline (agrupado)");
}

function a() {
  alert("função A");
}
function b() {}
function c() {}
function d() {}

function exportDefault() {
  console.log("Export default não-inline");
}

export { group, a, b, c, d };
export default exportDefault