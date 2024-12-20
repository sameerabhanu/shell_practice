let currentDirectory = '~';
const files = [];

const promptText = function (currentDirectory) {
  return ('sameerabhanu@Sameeras-MacBook-Pro ' + currentDirectory + ' %');
};

const runEcho = function (args) {
  return args.join(' ');
};

const runCd = function (args) {
  currentDirectory = args.join('').split('/').at(-1);
};

const runTouch = function (args) {
  files.push(args);
}

const runLs = function () {
  return files.join('\n');
}

const runPwd = function () {
  return currentDirectory;
}

const runMkdir = function () {
  return;
}

const runCommand = function (inputCommand) {
  const [command, ...args] = inputCommand.split(' ');

  switch (command) {
    case 'echo': return runEcho(args);
    case 'cd': return runCd(args);
    case 'touch': return runTouch(args);
    case 'ls': return runLs();
    case 'pwd': return runPwd();
    case 'mkdir': return runMkdir();
    default: return ' No such command';
  }

};

while (true) {
  const inputCommand = prompt(promptText(currentDirectory));
  const resultOfCommand = runCommand(inputCommand);

  if (resultOfCommand !== undefined) {
    console.log(resultOfCommand);
  }
}