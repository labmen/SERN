// terminal environment

// auto focus
function focus() {
    document.getElementById("input").focus();
}


class Command {
    constructor (structure, terminal) {
        this.structure = structure
        this.terminal = terminal
        this.setupListeners(this.terminal)
        this.CMD = ["cd", "ls", "cat", "help"]
    }

    setupListeners (terminal) {
        terminal.addEventListener("keypress", event => {
            if (event.keyCode == 13) {
                console.log(event.target)
                event.target.id = ""
                event.target.contenteditable = false
                var input = document.createElement('p')
                input.className = "cursor"
                input.innerHTML = `
                    <span class='prompt'>
                        <span class='user'>guest</span>
                        <span class='tick'>&ggg;</span>
                    </span>
                    <span contenteditable='true' id='input' class='input'></span>`
                event.target.parentElement.insertAdjacentElement('afterend', input)
                focus()
                this.setupListeners(document.getElementById("input"))
            }
        })
    }

    execute (cmd, args) {
        if (!this.CMD.includes(cmd)) {
            return "Error! Unknown cmd: " + cmd
        }
        if (cmd == "help") {
            return "test help"
        }
    }
}

const command = new Command(Root, document.getElementById("input"))
window.onload = function() {
    focus()
}