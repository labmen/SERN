
class File {
    constructor(name, data="") {
        this.name = name
        this.data = data
    }
}

class Folder {
    constructor(name, folders=[], files=[]) {
        this.name = name
        this.childFolders = folders
        this.childFiles = files
    }
}


const Root = new Folder('/', [
    new Folder('project', [
        new Folder('zprogram', [], [
            new File('report001'), new File('report002'), new File('report003')
        ])
    ], []),
    new Folder('wanted', [], [
        new File('OkabeRintaro'), new File('HashidaItaru'), new File('AmaneSuzuha')
    ]),
], [new File('about')])
