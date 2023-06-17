let command = []

for(let i = 0; i < Infinity; i++) {
    let cmd = prompt('Введите команду')
    let spl = cmd.split(', ')
    if(spl[0] == 'add') {
        command.push(spl[1])
    }else if(spl[0] == 'del') {
        for(let key = 0; key < command.length; key++) {
            if(command[key] == spl[1]) {
                command.splice(key,1)
            }
        }
    }else if(spl[0] == 'stop') {
        break
    }
    console.log(command);
}
