function createInput(className, text, type) {
  const input = document.createElement("input");
  input.className = className;
  input.value = text;
  input.type = type;

  return input;
}

function createOption(key, value) {
  const option = document.createElement("option");
  option.value = value;
  option.text = key;

  return option;
}

function createSelect(name, className) {
  const select = document.createElement("select");
  select.name = name;
  select.className = className;

  return select;
}

function createI(className){
  const i = document.createElement("i");
  i.name = name;
  i.className = className;

  return i;
}








