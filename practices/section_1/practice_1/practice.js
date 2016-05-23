function collect_same_elements(collection_a, collection_b) {
  var collect_same = [];

  collection_a.forEach(function (collection) {
    var existValue = isExistValue(collection, collection_b);

    if (existValue) {
      collect_same.push(collection);
    }
  });

  return collect_same;
}

function isExistValue(collection, collection_b) {
  var flag = false;

  collection_b.forEach(function (object) {
    if (collection === object) {
      flag = true;
    }
  });

  return flag;
}


module.exports = collect_same_elements;
